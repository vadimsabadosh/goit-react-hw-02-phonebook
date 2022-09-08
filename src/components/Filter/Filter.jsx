import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Filter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          id="filter"
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.props.value}
          onChange={e => this.props.onChange(e)}
        />
      </div>
    );
  }
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
