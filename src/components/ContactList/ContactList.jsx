import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
export default function ContactList({ contacts, deleteItem }) {
  return (
    <ul>
      {contacts?.map(({ id, number, name }) => (
        <ContactListItem
          key={id}
          id={id}
          number={number}
          name={name}
          deleteItem={deleteItem}
        />
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
