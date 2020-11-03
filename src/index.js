import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import storeFactory from './store'
import { defaultState } from './constants'
import { Provider } from 'react-redux'
import './stylesheets/index.scss'

const initialState = defaultState

const store = storeFactory(initialState)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
