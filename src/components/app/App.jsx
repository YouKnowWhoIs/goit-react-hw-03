import { useEffect, useState } from "react";
import { ContactForm } from "../contactForm/contactForm.jsx";
import { SearchBox } from "../searchBox/searchBox.jsx";
import { ContactList } from "../contactList/contactList.jsx";
import contact from "./contact.json";

function App() {
  const [searchValue, setsearchValue] = useState("");

  const [contacts, setContacts] = useState(() => {
    const saveContacts = window.localStorage.getItem("saveContacts");
    if (saveContacts !== null) {
      return JSON.parse(saveContacts);
    } else {
      return contact;
    }
  });

  const addContact = (newTask) => {
    setContacts((prevState) => {
      return [...prevState, newTask];
    });
    // console.log("work newTask");
  };

  const handleChangeSearch = (event) => {
    setsearchValue(event.target.value);
  };

  const handleOnDelete = (id) => {
    const nextContact = [...contacts];
    const index = nextContact.findIndex((contact) => contact.id === id);
    nextContact.splice(index, 1);
    // console.log("work", id, index);
    setContacts(nextContact);
  };

  useEffect(() => {
    window.localStorage.setItem("saveContacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />

        <SearchBox value={searchValue} onChange={handleChangeSearch} />

        <ContactList
          contacts={contacts}
          onDelete={handleOnDelete}
          searchValue={searchValue}
        />
      </div>
    </>
  );
}

export default App;
