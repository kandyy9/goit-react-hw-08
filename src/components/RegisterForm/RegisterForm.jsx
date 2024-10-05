import { Formik, Form, Field } from "formik";
import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operation";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{
          name,
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Username
            <Field name="name"></Field>
          </label>
          <label>
            Email
            <Field name="email" type="email"></Field>
          </label>
          <label>
            Password
            <Field name="password" type="password"></Field>
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
