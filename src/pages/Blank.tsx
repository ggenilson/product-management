import React from "react";
import Table, { TableColumnProps } from "../components/table";

type ExampleProps = {
  name: string;
  age: number;
};

const Blank: React.FC = () => {
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

  return (
    <>
      <Table
        columns={columns}
        data={[
          { name: "Genilson Araújo", age: 20 },
          { name: "Ednilson Araújo", age: 21 },
          { name: "Frederico Pascoal", age: 50 },
        ]}
      />
    </>
  );
};

export default Blank;
