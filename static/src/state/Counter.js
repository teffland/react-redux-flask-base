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
const C = constants

// Actions
// publish new info to reducers that ,ay effect state
export const actions = {
  incrementCount: () => ({
    type:C.INCREMENT_COUNT
  }),

  decrementCount: () => ({
    type:C.DECREMENT_COUNT
  }),
  setCount: (count) => ({
    type:C.SET_COUNT,
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
    case C.INCREMENT_COUNT:
      newState.count += 1
      return newState
    case C.DECREMENT_COUNT:
      newState.count -= 1
      return newState
    case C.SET_COUNT:
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
