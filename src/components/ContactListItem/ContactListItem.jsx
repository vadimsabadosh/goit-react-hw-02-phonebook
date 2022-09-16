import { PropTypes } from 'prop-types';
import React from 'react';

function ContactListItem({ number, name, deleteItem, id }) {
  return (
    <li>
      {name}: {number} <button onClick={() => deleteItem(id)}>Delete</button>
    </li>
  );
}

export default ContactListItem;

ContactListItem.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
