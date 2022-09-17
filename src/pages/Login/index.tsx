import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
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
  return (
    <div className="login_container">
      <form onSubmit={form.onSubmit((values) => console.log("Values"))}>
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
          <Button variant="outline" onClick={() => console.log("Log in")}>
            Log In
          </Button>
        </Group>
      </form>
    </div>
  );
};

export default Login;
