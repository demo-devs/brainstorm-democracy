var test = require('tape')
const reducer = require('../reducer');
const freeze = require('deep-freeze');

test('testing brainstorm-democracy', function (t) {
  t.ok(true)
  t.end()
})

test('ADD_ONE adds an idea if not exists', (t) => {
  //arrange
  const  state = {
    ideas: [
      { desc: 'Make a brainstorm democracy app', votes: 1 },
      { desc: 'Get a massage', votes: 2}
  ],
  }
const expected = {
  ideas: [
    {  desc: 'Make a brainstorm democracy app', votes: 1},
    {  desc: 'Get a massage', votes: 2},
    {  desc: 'Pay for the massage', votes: 3}
],
}
const action = {type:'ADD_ONE', payload: { desc: 'Pay for the massage', votes: 3}}

freeze(state)
freeze(action)
  //act
  const actual = reducer(state, action)
  //assert
  t.deepEqual(actual, expected, 'successfully adds an idea')
  t.end()
})

test('ADD_VOTE adds a vote to the corresponding ID', (t) => {
  //arrange
  const  state = {
    ideas: [
      { desc: 'Make a brainstorm democracy app', votes: 1 },
      { desc: 'Get a massage', votes: 2}
  ],
  }

const expected = {
  ideas: [
    { desc: 'Make a brainstorm democracy app', votes: 1},
    { desc: 'Get a massage', votes: 3}
],
}
const action = {type: 'ADD_VOTE', payload: {index: 1}}

freeze(action)
freeze(state)
  //act
  const actual = reducer(state, action)
  //assert
  t.deepEqual(actual, expected, 'Successfully adds a vote to corresponding idea')
})
