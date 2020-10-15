import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
  state={
    text:''
  }

  static propTypes= {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  }

  // Events
  // onChange event will update all input's by the name of input bc of the [e.target.name] 
  onChange= (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.text === ''){
      this.props.setAlert(' Please enter something', 'light')
    } else {
    // console.log(this.state.text)
    // searchUsers is a Function coming from the App.js file 
    this.props.searchUsers(this.state.text)
    // clear the form
    this.setState({text:''})
    }
  }

  render() {
    const {showClear, clearUsers} = this.props
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder='Search Users...' value={this.state.text} onChange={this.onChange}/>
          <input type="submit" value="search" className="btn btn-dark btn-block"/>
        </form>
        {showClear && <button onClick={clearUsers} className="btn btn-light btn-block" >Clear</button>}
        
      </div>
    )
  }
}

export default Search

