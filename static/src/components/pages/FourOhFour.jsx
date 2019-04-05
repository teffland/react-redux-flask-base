/**
* A simple functional component for the home page
*/
import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (<>
    <h4>Whoops, this page isn't real...</h4>
    <Link to='/'>Get me outta here!</Link>
  </>)
}
