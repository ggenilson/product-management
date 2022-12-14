import { showNotification } from "@mantine/notifications";
import React, { useContext, useEffect, useState } from "react";
import Table, { TableColumnProps } from "../components/table";
import { AuthUserContext } from "../contexts";
import api from "../services/api";
import UserForm, { UserProps } from "../shared/user-form";

const User: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userData } = useContext(AuthUserContext);

  const removeUser = async (id: string) => {
    try {
      await api.delete(`/users/${id}`);

      getUsers();
    } catch (err) {
      console.log(err);

      showNotification({
        message: String(err) || "Something went wrong while saving the product",
        color: "red",
      });
    }
  };

  const getUsers = async () => {
    setLoading(true);

    try {
      const users = await api.get("/users");

      if (users.data) {
        const newUserList = users.data.filter(
          (user: UserProps) => user.id !== userData?.user.id
        );

        setUsers(newUserList);
      }
    } catch (err) {
      setLoading(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const columns: TableColumnProps<UserProps>[] = [
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Username",
      value: "username",
    },
    {
      label: "Email",
      value: "email",
    },
  ];

  return (
    <>
      <UserForm {...{ openModal, setOpenModal }} onAdd={getUsers} />

      <Table
        columns={columns}
        data={users}
        loading={loading}
        onAddClick={() => setOpenModal(true)}
        onDeleteClick={(user) => removeUser(user.id)}
      />
    </>
  );
};

export default User;
