/**
* A stateful component that talks to the store
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { actions } from '../state/Counter'

export default class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<>
      <h3>The Counter</h3>
      <p>Current count:</p>
      <Link to='/'>Go home</Link>
    </>)
  }
}
