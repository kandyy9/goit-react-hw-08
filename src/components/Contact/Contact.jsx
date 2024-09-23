import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  function handleCLick(id) {
    dispatch(deleteContact(id));
  }

  return (
    <li className={css.contactContainer}>
      <div className={css.contacInfo}>
        <p className={css.contactInfoField}>
          <BsFillPersonFill />
          {name}
        </p>
        <p className={css.contactInfoField}>
          <BsFillTelephoneFill />
          {number}
        </p>
      </div>
      <button
        className={css.deleteContactButton}
        onClick={() => {
          handleCLick(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
