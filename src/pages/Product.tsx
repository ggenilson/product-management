import React, { useState } from "react";
import Table, { TableColumnProps } from "../components/table";
import ProductForm from "../shared/product-form";

type ExampleProps = {
  name: string;
  age: number;
};

const Product: React.FC = () => {
  const columns: TableColumnProps<ExampleProps>[] = [
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Price",
      value: "age",
    },
  ];

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ProductForm {...{ openModal, setOpenModal }} />

      <Table
        columns={columns}
        data={[
          { name: "Genilson Araújo", age: 20 },
          { name: "Ednilson Araújo", age: 21 },
          { name: "Frederico Pascoal", age: 50 },
        ]}
        loading={false}
        onAddClick={() => setOpenModal(true)}
      />
    </>
  );
};

export default Product;
