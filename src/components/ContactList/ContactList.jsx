import React from 'react';
import PropTypes from 'prop-types';
export default function ContactList({ contacts, deleteItem }) {
  return (
    <ul>
      {contacts?.map(({ id, number, name }) => (
        <li key={id}>
          {name}: {number}{' '}
          <button onClick={() => deleteItem(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteItem: PropTypes.func.isRequired,
};
