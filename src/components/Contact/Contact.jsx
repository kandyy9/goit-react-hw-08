import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  const submit = () => {
    confirmAlert({
      title: "Are you sure you want to delete this contact?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleCLick(id),
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
      overlayClassName: "overlay",
    });
  };
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
        <a href={`tel:${number}`} className={css.contactInfoField}>
          <BsFillTelephoneFill />
          {number}
        </a>
      </div>
      <button className={css.deleteContactButton} onClick={submit}>
        Delete
      </button>
    </li>
  );
}
