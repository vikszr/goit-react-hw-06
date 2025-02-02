import css from "./Contact.module.css";
import {BsFillTelephoneFill, BsFillPersonFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/contactsSlice.js";

export default function Contact({data: {id, name, number}}) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div>
        <p>
          <BsFillPersonFill className={css.icon} size="16"/>
          {name}
        </p>
        <p>
          <BsFillTelephoneFill className={css.icon} size="16"/>
          {number}
        </p>
      </div>
      <button className={css.button}
              onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}
