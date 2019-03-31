import React from 'react'
import { createStore, combineReducers } from 'redux'
import reducers from '../reducers'

export const store = createStore(
  combineReducers({
    state: reducers
  }),
  window.__REDUCE_DEVTOOLS_EXTENSION__ && window.__REDUCE_DEVTOOLS_EXTENSION__()
)
