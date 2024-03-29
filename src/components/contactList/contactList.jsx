// import contacts from "./contacts.json";
import PropTypes from "prop-types";
import { Contact } from "./contact.jsx";

export const ContactList = ({ filteredContacts }) => {
  console.log(filteredContacts);
  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li key={contact.id} className="contact-name">
            <Contact name={contact.name} number={contact.number} />
          </li>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
};
ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
};
