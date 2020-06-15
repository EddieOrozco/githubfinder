import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  // Component Level State
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  // METHODS
  // How to search for users onSubmit function
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };
  // How to write inside a form onChange function
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //Methods End

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
