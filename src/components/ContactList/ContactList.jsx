import { useSelector } from "react-redux";
import { selectedFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectedFilteredContacts);

  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact}></Contact>
        ))}
      </ul>
    </>
  );
}
