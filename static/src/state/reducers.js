import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counter from './Counter'

export default (history) => combineReducers({
  router: connectRouter(history),
  counter,
})
