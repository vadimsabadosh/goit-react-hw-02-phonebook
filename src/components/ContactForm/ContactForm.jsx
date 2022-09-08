import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
    this.addContact = this.addContact.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addContact() {
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({
      name: '',
      number: '',
    });
  }
  render() {
    return (
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={e => this.onChange(e)}
          />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <input
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={e => this.onChange(e)}
          />
        </div>
        <button onClick={this.addContact}>Add contact</button>
      </div>
    );
  }
}
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
