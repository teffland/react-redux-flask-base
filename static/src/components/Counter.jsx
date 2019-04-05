/**
* A stateful component that talks to the store
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { actions, selectors } from '../state/Counter'

class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log
    const {
      count,
      countSquared,
      incrementCount,
      decrementCount
    } = this.props
    return (
      <>
        <h3>The Counter!</h3>
        <p>Current count: {count}, (squared={countSquared})</p>
        <div>
          <a href='#' onClick={incrementCount}>Increment</a>
          <br/>
          <a href='#' onClick={decrementCount}>Decrement</a>
          <br/>
          <Link to='/'>Go home</Link>
        </div>
    </>)
  }
}

const mapStateToProps = (state) => {
  const counter =  state.counter
  return {
    count:counter.count,
    countSquared:selectors.countSquared(counter)
  }
}

export default connect(mapStateToProps, actions)(Counter)
