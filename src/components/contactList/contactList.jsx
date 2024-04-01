// import contacts from "./contacts.json";
// import PropTypes from "prop-types";

export const ContactList = ({ filteredContacts, onDelete }) => {
  // console.log(filteredContacts);
  return (
    <>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <div key={contact.id} className="contact-name">
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button
              className="contact-delete"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
