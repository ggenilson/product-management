import { Button, Modal, NumberInput, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import api from "../services/api";

export type ProductProps = {
  name: string;
  value: number;
  group: string;
  description: string;
};

type ProductFormProps = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

const ProductForm: React.FC<ProductFormProps> = ({
  openModal,
  setOpenModal,
}) => {
  const form = useForm({
    initialValues: { name: "", value: 0, group: "", description: "" },

    validate: {
      name: (value) => (!value.length ? "required *" : null),
      group: (value) => (!value.length ? "required *" : null),
      description: (value) => (!value.length ? "required *" : null),
    },
  });

  const handleOnSubmit = async (values: typeof form.values) => {
    try {
      const product = await api.post("/products", values);

      if (product.data) {
        showNotification({
          message: "Product saved",
          color: "green",
        });

        form.reset();

        setOpenModal(false);
      }
    } catch (err) {
      showNotification({
        message: "Something went wrong while saving the product",
        color: "red",
      });
    }
  };

  return (
    <Modal
      opened={openModal}
      onClose={() => setOpenModal(false)}
      size="lg"
      title="Add new product"
    >
      <form onSubmit={form.onSubmit((values) => handleOnSubmit(values))}>
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
        <Textarea
          mt="sm"
          label="Description"
          placeholder="Description"
          {...form.getInputProps("description")}
        />

        <Button type="submit" mt="sm" className="add">
          Add
        </Button>
      </form>
    </Modal>
  );
};

export default ProductForm;
