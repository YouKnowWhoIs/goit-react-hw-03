import { useState } from "react";
import { ContactForm } from "../contactForm/contactForm.jsx";
import { SearchBox } from "../searchBox/searchBox.jsx";
import { ContactList } from "../contactList/contactList.jsx";
import contacts from "./contacts.json";

function App() {
  const [searchValue, setsearchValue] = useState("");

  const [task, setTask] = useState([]);

  const addContact = (newTask) => {
    setTask((prevState) => {
      return [...prevState, newTask];
    });
    console.log("work newTask");
  };

  const handleChangeSearch = (event) => {
    setsearchValue(event.target.value);
  };

  const handleOnDelete = (id) => {
    console.log("work", id);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={searchValue} onChange={handleChangeSearch} />
        <ContactList
          filteredContacts={filteredContacts}
          onDelete={handleOnDelete}
        />
      </div>
    </>
  );
}

export default App;
