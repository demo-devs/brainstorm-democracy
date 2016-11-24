import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

render(<App name='brainstorm-democracy' />, document.querySelector('main'))
console.log('welcome to brainstorm-democracy')

const  initialState = {
  ideas: [
    { id: 1, desc: 'Make a brainstorm democracy app' },
    { id: 2, desc: 'Get a massage'}
],
  votes: [
    { id:1, count: 2 },
    { id:2, count: 4 }
  ]
}
