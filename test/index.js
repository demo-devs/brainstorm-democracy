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
      { id: 1, desc: 'Make a brainstorm democracy app' },
      { id: 2, desc: 'Get a massage'}
  ],
    votes: [
      { id:1, count: 2 },
      { id:2, count: 4 }
    ]
  }
const expected = {
  ideas: [
    { id: 1, desc: 'Make a brainstorm democracy app' },
    { id: 2, desc: 'Get a massage'},
    { id: 3, desc: 'Pay for the massage'}
],
  votes: [
    { id:1, count: 2 },
    { id:2, count: 4 }
  ]
}
const action = {type:'ADD_ONE', payload: { id: 3, desc: 'Pay for the massage'}}

freeze(state)
freeze(action)
  //act
  const actual = reducer(state, action)
  //assert
  t.deepEqual(actual, expected, 'successfully adds an idea')
})
