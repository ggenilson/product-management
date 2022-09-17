import { Button, Modal, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import api from "../services/api";

export type UserProps = {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
};

type UserFormProps = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  onAdd: () => void;
};

const UserForm: React.FC<UserFormProps> = ({
  openModal,
  setOpenModal,
  onAdd,
}) => {
  const form = useForm({
    initialValues: { name: "", username: "", email: "", password: "" },

    validate: {
      name: (value) => (!value.length ? "required *" : null),
      username: (value) => (!value.length ? "required *" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "invalid email"),
      password: (value) => (!value.length ? "required *" : null),
    },
  });

  const handleOnSubmit = async (values: typeof form.values) => {
    try {
      const user = await api.post("/users", values);

      if (user.data) {
        showNotification({
          message: "User saved",
          color: "green",
        });

        onAdd();

        form.reset();

        setOpenModal(false);
      }
    } catch (err) {
      showNotification({
        message: String(err) || "Something went wrong while saving the user",
        color: "red",
      });
    }
  };

  return (
    <Modal
      opened={openModal}
      onClose={() => setOpenModal(false)}
      size="lg"
      title="Add new user"
    >
      <form onSubmit={form.onSubmit((values) => handleOnSubmit(values))}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          mt="sm"
          label="Username"
          placeholder="Username"
          {...form.getInputProps("username")}
        />
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          mt="sm"
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />

        <Button type="submit" mt="sm" className="add">
          Add
        </Button>
      </form>
    </Modal>
  );
};

export default UserForm;
