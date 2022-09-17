// import { showNotification } from "@mantine/notifications";
import React, { useEffect, useState } from "react";
import Table, { TableColumnProps } from "../components/table";
import api from "../services/api";
import UserForm, { UserProps } from "../shared/user-form";

const User: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // const removeProduct = async (id: string) => {
  //   try {
  //     await api.delete(`/products/${id}`);

  //     getProducts();
  //   } catch (err) {
  //     console.log(err);

  //     showNotification({
  //       message: String(err) || "Something went wrong while saving the product",
  //       color: "red",
  //     });
  //   }
  // };

  const getProducts = async () => {
    setLoading(true);

    try {
      const products = await api.get("/products");

      if (products.data) {
        setUsers(products.data);
      }
    } catch (err) {
      setLoading(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    getProducts();
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
      <UserForm {...{ openModal, setOpenModal }} onAdd={getProducts} />

      <Table
        columns={columns}
        data={users}
        loading={loading}
        onAddClick={() => setOpenModal(true)}
        // onDeleteClick={(product) => removeProduct(product.id)}
      />
    </>
  );
};

export default User;
