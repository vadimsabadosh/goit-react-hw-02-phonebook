import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts
          .filter(item => item.name.toLowerCase().includes(this.props.filter))
          ?.map(item => (
            <li key={item.id}>
              {item.name}: {item.number}{' '}
              <button onClick={() => this.props.deleteItem(item.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
