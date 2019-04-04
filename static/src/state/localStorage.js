/**
* See https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
*/

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reactState')
    if (serializedState === null) {
      return undefined
    }
    let state = JSON.parse(serializedState)
    console.log('loaded state', state)
    if (state.router) {
      state.router.location  = window.location
    }
    return state

  } catch (err) {
    console.log('Error loading state from localStorage', err)
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('reactState', serializedState)
  } catch (err) {
    console.log('Error saving state to localStorage', err)
  }
}
