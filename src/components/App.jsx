import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onFilterInput = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onDelete = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(item => item.id !== id),
    }));
  };

  onAddContact = (name, number) => {
    const newContact = {
      name,
      id: uuidv4(),
      number,
    };
    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));
  };

  filterContacts = () => {
    return this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.onAddContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onFilterInput} />
        <ContactList
          contacts={this.filterContacts()}
          deleteItem={this.onDelete}
        />
      </div>
    );
  }
}
