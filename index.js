import {createStore} from 'redux'
import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
const reducer = require('./reducer')


const initialState = {
  ideas: [
    { id: 1, desc: 'Make a brainstorm democracy app' , votes: 1},
    { id: 2, desc: 'Get a massage', votes: 2}
]
}

const store = createStore(reducer, initialState)

const Input = (props) => {
  return (
  <div>
    <input type='text'  placeholder='Type your idea here' />
    <input type='submit' onClick={(e) => {
      props.dispatch({type: 'ADD_ONE', payload: {desc: e.target.previousSibling.value, votes: 0}})
    }}
      />
  </div>
)}


const Idea = (props) => {
  return (
    <ul>
      <li>{props.desc}</li>
    </ul>
  )
}

const Ideas = (props) => {
  return (
    <div>
      {props.ideas.map((idea, index)=> {
        return <Idea desc={idea.desc} index={index} />
      })}
    </div>)
}

const main = document.querySelector('main')

store.subscribe(() => {
  const state = store.getState()
  render(
  <div>
    <Input  state={state} dispatch={store.dispatch}/>
    <Ideas ideas={state.ideas}/>
  </div>, main)
})

store.dispatch({type: 'INIT'})
