import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import {useSelector} from "react-redux";

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filters.name);

  const data = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={css.container}>
      {data.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact}/>
        </li>
      ))}
    </ul>
  );
}
