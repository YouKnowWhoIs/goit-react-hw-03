// import { useState } from "react";
// import { ContactForm } from "../contactForm/contactForm.jsx";
// import { SearchBox } from "../searchBox/searchBox.jsx";
import { ContactList } from "../contactList/contactList.jsx";
import "./App.css";
import contact from "./contact.json";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        {/* <SearchBox /> */}
        <ContactList contact={contact} />
      </div>
    </>
  );
}

export default App;
