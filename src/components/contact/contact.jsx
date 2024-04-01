export const Contact = ({ onDelete, name, number, id }) => {
  return (
    <li className="contact-conteiner">
      <p>{name}</p>
      <p>{number}</p>
      <button className="contact-delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
