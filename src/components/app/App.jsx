import { useState } from "react";
import { ContactForm } from "../contactForm/contactForm.jsx";
import { SearchBox } from "../searchBox/searchBox.jsx";
import { ContactList } from "../contactList/contactList.jsx";
import initialContacts from "./contacts.json";

function App() {
  const [searchValue, setsearchValue] = useState("");

  const [contacts, setContacts] = useState(initialContacts);

  const handleChangeSearch = (event) => {
    console.log("work");
    setsearchValue(() => event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox value={searchValue} onChange={handleChangeSearch} />
        <ContactList filteredContacts={filteredContacts} />
      </div>
    </>
  );
}

export default App;
