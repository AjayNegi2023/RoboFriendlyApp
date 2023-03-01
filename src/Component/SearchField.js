import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'tachyons'
class SearchField extends Component {


  render() {
    const {searchChange} =this.props
    return (
      <div className='pa2'>
        <input type="search" placeholder='Search Here' className='pa3 ba b--green bg-lightest-blue'
        onChange={searchChange}
        ></input>
      </div>
    )
  }
}

export default SearchField