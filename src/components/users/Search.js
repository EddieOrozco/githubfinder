import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
  const [text, setText] = useState('')


  // Events
  const onSubmit = (e) => {
    e.preventDefault()
    if (text === ''){
      setAlert(' Please enter something', 'light')
    } else {
    // console.log(this.state.text)
    // searchUsers is a Function coming from the App.js file 
    searchUsers(text)
    // clear the form
    setText('')
    }
  }

  // onChange event will update all input's by the name of input bc of the [e.target.name] 
  const onChange= (e) => {
    setText(e.target.value)
  }

    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input type="text" name="text" placeholder='Search Users...' value={text} onChange={onChange}/>
          <input type="submit" value="search" className="btn btn-dark btn-block"/>
        </form>
        {showClear && <button onClick={clearUsers} className="btn btn-light btn-block" >Clear</button>}
        
      </div>
    )
  
}

Search.propTypes= {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search

