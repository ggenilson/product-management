import React, { useEffect, useState } from "react";
import Table, { TableColumnProps } from "../components/table";
import api from "../services/api";
import ProductForm, { ProductProps } from "../shared/product-form";

const Product: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);

    const products = await api.get("/products");

    if (products.data) {
      setProducts(products.data);
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
      <ProductForm {...{ openModal, setOpenModal }} />

      <Table
        columns={columns}
        data={products}
        loading={loading}
        onAddClick={() => setOpenModal(true)}
      />
    </>
  );
};

export default Product;
