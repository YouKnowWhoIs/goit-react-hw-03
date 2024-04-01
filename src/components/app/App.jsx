import { useState } from "react";
import { ContactForm } from "../contactForm/contactForm.jsx";
import { SearchBox } from "../searchBox/searchBox.jsx";
import { ContactList } from "../contactList/contactList.jsx";
import contacts from "./contacts.json";

function App() {
  const [searchValue, setsearchValue] = useState("");

  const [contact, setcontact] = useState([]);

  const addContact = (newTask) => {
    setcontact((prevState) => {
      return [...prevState, newTask];
    });
    console.log("work newTask");
  };

  const handleChangeSearch = (event) => {
    setsearchValue(event.target.value);
  };

  const handleOnDelete = (id) => {
    const nextContact = [...contacts];
    const index = nextContact.findIndex((contact) => contact.id === id);
    nextContact.splice(index, 1);
    console.log("work", id, index);
    setcontact(nextContact);
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

        <ul>
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <ContactList
                key={contact.id}
                {...contact}
                onDelete={handleOnDelete}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
