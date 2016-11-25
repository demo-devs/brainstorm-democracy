import {createStore} from 'redux'
import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
const reducer = require('./reducer')


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

const store = createStore(reducer, initialState)

const Input = (props) => {
  return (
  <div>
    <input type='text' placeholder="What's your idea?" />
    <input type='submit' value='Submit' />
  </div>
)}


const Idea = (props) => {
  return (
    <ul>
      <li onClick={() => props.dispatch({props.index})}>{props.desc}</li>
    </ul>
  )
}

const Ideas = (props) => {
  return (
    <div>
      {props.ideas.map((idea)=> {
        return <Idea desc={idea.desc} />
      })}
    </div>)
}

const main = document.querySelector('main')

store.subscribe(() => {
  const state = store.getState()
  render(
  <div>
    <Input  />
    <Ideas ideas={state.ideas}/>
  </div>, main)
})

store.dispatch({type: 'INIT'})
