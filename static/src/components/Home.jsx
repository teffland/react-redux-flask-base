/**
* A simple functional component for the home page
*/
import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (<>
    <p>You're home</p>
    <Link to='/counter'>Go to the Counter</Link>
  </>)
}
