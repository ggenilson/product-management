import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../contexts";
import api from "../../services/api";
import "./style.scss";

const Login: React.FC = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "invalid email"),
      password: (value) => (!value.length ? "required *" : null),
    },
  });

  const navigate = useNavigate();
  const { setUserData } = useContext(AuthUserContext);

  const login = async (values: typeof form.values) => {
    try {
      const user = await api.post("/users/authenticate", values);

      if (user.data) {
        localStorage.setItem(
          "product-management-user-data",
          JSON.stringify(user.data)
        );

        setUserData(user.data);

        showNotification({
          message: "user logged",
          color: "green",
        });

        navigate("/dashboard");
      }
    } catch (err) {
      showNotification({
        message: String(err) || "Something went wrong while saving the product",
        color: "red",
      });
    }
  };

  return (
    <div className="login_container">
      <form onSubmit={form.onSubmit((values) => login(values))}>
        <TextInput
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          mt="md"
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />

        <Group position="center" mt="xl">
          <Button type="submit" variant="outline">
            Log In
          </Button>
        </Group>
      </form>
    </div>
  );
};

export default Login;
