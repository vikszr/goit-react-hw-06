import css from "./App.module.css";
import "modern-normalize";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import {useSelector} from "react-redux";

function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filters.name);

  const searchResult = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList data={searchResult}/>
    </div>
  );
}

export default App;
