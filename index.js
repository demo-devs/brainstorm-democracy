import {createStore} from 'redux'
import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
const reducer = require('./reducer')


const initialState = {
  ideas: [
    { desc: 'Make a brainstorm democracy app' , votes: 1},
    { desc: 'Get a massage', votes: 2}
]
}

const store = createStore(reducer, initialState)

const Input = (props) => {
  return (
  <div id='formDiv'>
    <h1 id='heading'>Brainstorm Democracy</h1>
    <input type='text'  placeholder='Type your idea here' />
    <input class='btn' type='submit' value='Submit' onClick={(e) => {
      props.dispatch({type: 'ADD_ONE', payload: {desc: e.target.previousSibling.value, votes: 0}})
    }}
      />
  </div>
)}


const Idea = (props) => {
  return (
    <ul>
      <li onClick={() => props.dispatch({type:'ADD_VOTE',payload: props.index})}>{props.desc} <span><h1>{props.votes}</h1></span></li>
    </ul>
  )
}

const Ideas = (props) => {
  return (
    <div>

      {props.ideas.map((idea, index)=> {
        return <Idea dispatch={props.dispatch} desc={idea.desc} votes={idea.votes} index={index} />
      })}
    </div>
  )
}

const main = document.querySelector('main')

store.subscribe(() => {
  const state = store.getState()
  render(
  <div>
    <Input   state={state} dispatch={store.dispatch}/>
    <Ideas dispatch={store.dispatch} ideas={state.ideas}/>
  </div>, main)
})

store.dispatch({type: 'INIT'})
