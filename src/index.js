import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import PostState from './context/post/PostState'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <PostState>
      <App />
    </PostState>
  </React.StrictMode>,
  document.getElementById('root')
)
