import { Button, Modal, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

type ProductFormProps = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

const ProductForm: React.FC<ProductFormProps> = ({
  openModal,
  setOpenModal,
}) => {
  const form = useForm({
    initialValues: { name: "", value: 0, group: "" },

    validate: {
      name: (value) => (!value.length ? "required *" : null),
      group: (value) => (!value.length ? "required *" : null),
    },
  });

  return (
    <Modal
      opened={openModal}
      onClose={() => setOpenModal(false)}
      size="lg"
      title="Add new product"
    >
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <NumberInput
          mt="sm"
          label="Value"
          placeholder="Value"
          min={0}
          {...form.getInputProps("value")}
        />
        <TextInput
          mt="sm"
          label="Group"
          placeholder="Group"
          {...form.getInputProps("group")}
        />

        <Button type="submit" mt="sm" className="add">
          Add
        </Button>
      </form>
    </Modal>
  );
};

export default ProductForm;
