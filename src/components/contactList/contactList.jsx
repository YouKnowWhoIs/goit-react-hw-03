export const ContactList = ({ onDelete, contacts, searchValue }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li key={contact.id} className="contact-name">
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button
              className="contact-delete"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p>You don`t have a contakts</p>
      )}
    </ul>
  );
};
