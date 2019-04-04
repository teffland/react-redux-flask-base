/**
 * @fileoverview Configuration of the app state.
 * @author Tom Effland
 */
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import throttle from 'lodash/throttle'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './reducers.js'
import {loadState, saveState} from './localStorage'

/**
* Initialize the store, using the persisted localStorage state if possible
*/
export const history = createBrowserHistory()
const priorState = loadState() || {}
const store = createStore(
  createRootReducer(history), // root reducer with router state
  priorState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      thunk,
      logger,
    ),
  ),
)

/**
* Subscribe a state change listener to the store that will persist it
* to localStorage at most once a second
*/
store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

export default store
