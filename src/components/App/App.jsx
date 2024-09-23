import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import { FallingLines } from "react-loader-spinner";
import toast from "react-hot-toast";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

export default function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispactch = useDispatch();

  useEffect(() => {
    dispactch(fetchContacts());
  }, [dispactch]);

  return (
    <div className={css.container}>
      <h1>Phone</h1>
      <ContactForm />
      <SearchBox></SearchBox>
      {loading && <FallingLines />}
      {error && toast.error(error)}
      {!error && !loading && <ContactList></ContactList>}
    </div>
  );
}
