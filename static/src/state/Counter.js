/**
* Simple counter demo of a duck
*/

// Constants
export const constants = {
  INCREMENT_COUNT:'INCREMENT_COUNT',
  DECREMENT_COUNT:'DECREMENT_COUNT',
  SET_COUNT:'SET_COUNT'
}
console.log(constants)
const c = constants

// Actions
// publish new info to reducers that ,ay effect state
export const actions = {
  incrementCount: () => ({
    type:c.INCREMENT_COUNT
  }),

  decrementCount: () => ({
    type:c.DECREMENT_COUNT
  }),
  setCount: (count) => ({
    type:c.SET_COUNT,
    count
  })

}


// Initial State
export const initialState = {
  count:0,
}


// Reducers
// decide how actions should change the state
// Note: should be default export
export default (state = initialState, action) => {
  let newState = { ...state } // returned state needs to be new object
  switch(action.type) {
    case c.INCREMENT_COUNT:
      newState.count += 1
      return newState
    case c.DECREMENT_COUNT:
      newState.count -= 1
      return newState
    case c.SET_COUNT:
      newState.count += action.count
      return newState
  }
  return newState
}


// Selectors
// used to compute _derived_ state from the raw state
export const selectors = {
  countSquared: state => state.count * state.count,
}
