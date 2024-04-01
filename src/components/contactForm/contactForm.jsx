import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

const initialValues = {
  name: "",
  number: "",
};

export const ContactForm = ({ onAdd }) => {
  // console.log(onAdd);

  const nameId = uuidv4();
  const numberId = uuidv4();

  const handleSumbit = (values, actions) => {
    console.log("work", values);
    const newContact = {
      ...values,
      id: uuidv4(),
      name: values.name.trim(),
    };
    onAdd(newContact);
    console.log(newContact);
    actions.resetForm();
  };

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required(),
    number: Yup.string()
      .trim()
      .min(1, "Too Short!")
      .max(20, "Too Long!")
      .required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSumbit}
      validationSchema={FormSchema}
    >
      <Form className="contact-form">
        <label htmlFor={nameId}>Name:</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="p" />
        <label htmlFor={numberId}>Number:</label>
        <Field type="number" name="number" id={numberId} />
        <ErrorMessage name="number" component="p" />

        <button type="submit" className="button-add-contact">
          Add contant
        </button>
      </Form>
    </Formik>
  );
};
