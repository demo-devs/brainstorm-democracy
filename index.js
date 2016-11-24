import {createStore} from 'redux'
import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
// const reducer = require('./reducer')


const initialState = {
  ideas: [
    { id: 1, desc: 'Make a brainstorm democracy app' },
    { id: 2, desc: 'Get a massage'}
],
  votes: [
    { id:1, count: 2 },
    { id:2, count: 4 }
  ]
}

// const store = createStore(reducer, initialState)

const Input = (props) => {
  return (
  <div>
    <input type='text' placeholder='Type your idea here' />
    <input type='submit' value='Submit' />
  </div>
)
}
const Idea = (props => {
  return <div> <h3>{props.desc}</h3> </div> })

const Ideas = (props) => {
   return <div>
    {props.ideas.map((idea) => {
      return <Idea desc={idea.desc} />
    })}
  </div>
}

const main = document.querySelector('main')
render(<Input />, main)

// store.subscribe(() => {
//   const state = store.getState()
//   render(<Input dispatch={store.dispatch} />, main)
// })
//
// store.dispatch({type: 'INIT'})
