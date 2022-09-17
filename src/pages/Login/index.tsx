import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import api from "../../services/api";
import "./style.scss";

const Login: React.FC = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (!value.length ? "required *" : null),
      password: (value) => (!value.length ? "required *" : null),
    },
  });

  const login = async (values: typeof form.values) => {
    const user = await api.post("/users/authenticate", values);

    console.log(user);
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
