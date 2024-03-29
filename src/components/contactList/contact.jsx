import PropTypes from "prop-types";

export const Contact = ({ name, number }) => {
  //   console.log(name, number);
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button className="contact-delete">Delete</button>
    </div>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
};
Contact.propTypes = {
  number: PropTypes.string.isRequired,
};
