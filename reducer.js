const clone = require('clone')


function reducer(state, action) {
  const newState = clone(state)
  switch (action.type) {
    case 'ADD_ONE':
      let votes = newState.votes
      let ideas = newState.ideas
      if(!ideas.includes(action.payload)) {
        ideas.push(action.payload)
      return newState
      }

    case 'ADD_VOTE':
      votes = newState.votes
      ideas = newState.ideas
      votes[action.payload] += 1
      return newState

      return newState
    default:
      return newState
  }
}








module.exports = reducer
