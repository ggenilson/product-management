import { showNotification } from "@mantine/notifications";
import React, { useEffect, useState } from "react";
import Table, { TableColumnProps } from "../components/table";
import api from "../services/api";
import ProductForm, { ProductProps } from "../shared/product-form";

const Product: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const [loading, setLoading] = useState(false);

  const removeProduct = async (id: string) => {
    try {
      await api.delete(`/products/${id}`);

      getProducts();
    } catch (err) {
      console.log(err);
      showNotification({
        message: String(err) || "Something went wrong while saving the product",
        color: "red",
      });
    }
  };

  const getProducts = async () => {
    setLoading(true);

    try {
      const products = await api.get("/products");

      if (products.data) {
        setProducts(products.data);
      }
    } catch (err) {
      setLoading(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const columns: TableColumnProps<ProductProps>[] = [
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Value",
      value: "value",
    },
    {
      label: "Group",
      value: "group",
    },
  ];

  return (
    <>
      <ProductForm {...{ openModal, setOpenModal }} onAdd={getProducts} />

      <Table
        columns={columns}
        data={products}
        loading={loading}
        onAddClick={() => setOpenModal(true)}
        onDeleteClick={async (row) => await removeProduct(row.id)}
      />
    </>
  );
};

export default Product;
