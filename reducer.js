const clone = require('clone')


function reducer(state, action) {
  const newState = clone(state)
  switch (action.type) {
    case 'ADD_ONE':
      let votes = newState.votes
      let ideas = newState.ideas

      ideas.push(action.payload)
      return newState
    default:
      return newState

  }
}








module.exports = reducer
