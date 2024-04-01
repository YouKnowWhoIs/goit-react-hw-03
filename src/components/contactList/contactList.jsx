export const ContactList = ({ name, number, id, onDelete }) => {
  return (
    <li className="contact-name">
      <p>{name}</p>
      <p>{number}</p>
      <button className="contact-delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
