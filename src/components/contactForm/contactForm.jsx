import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  usertel: "",
};

export const ContactForm = () => {
  const handleSumbit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSumbit}>
      <Form className="contact-form">
        <p>Name:</p>
        <Field type="text" name="username" />
        <p>Number:</p>
        <Field type="number" name="usertel" />
        <button type="submit" className="button-add-contact">
          Add contant
        </button>
      </Form>
    </Formik>
  );
};
