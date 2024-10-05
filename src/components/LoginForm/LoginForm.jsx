import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operation";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Email
            <Field name="email" type="email"></Field>
          </label>
          <label>
            Password
            <Field name="password" type="password"></Field>
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
}
