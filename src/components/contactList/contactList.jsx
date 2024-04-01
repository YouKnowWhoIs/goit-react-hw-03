import { Contact } from "../contact/contact";

export const ContactList = ({ onDelete, filteredContacts }) => {
  return (
    <ul className="contact-list">
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            onDelete={onDelete}
            filteredContacts={filteredContacts}
            {...contact}
          />
        ))
      ) : (
        <p>You don`t have a contakts</p>
      )}
    </ul>
  );
};
