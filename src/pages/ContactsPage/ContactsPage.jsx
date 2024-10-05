import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectLoadingFetch,
  selectError,
  selectLoading,
} from "../../redux/contacts/selector";
import { selectNameFilter } from "../../redux/filters/selector";
import toast from "react-hot-toast";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import css from "./ContactsPage.module.css";

export default function HomePage() {
  const loading = useSelector(selectLoading);
  const loadingFetch = useSelector(selectLoadingFetch);
  const error = useSelector(selectError);
  const filter = useSelector(selectNameFilter);
  const dispactch = useDispatch();

  useEffect(() => {
    dispactch(fetchContacts());
  }, [dispactch]);

  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.functional}>
          <h2 className={css.sectionHeader}>Add Contact</h2>
          {loading || (loadingFetch && <Loader />)}
          <ContactForm />
          <SearchBox></SearchBox>
          {error && toast.error(error)}
        </div>
        {!error && !loading && (
          <div className={css.contactsWrapper}>
            <h2 className={css.sectionHeader}>
              {filter !== "" ? "Results" : "Your Contacts"}
            </h2>
            <ContactList></ContactList>
          </div>
        )}
      </div>
    </div>
  );
}
