import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './js/reducers'
import { actionFn } from './js/utils'
import * as containers from './js/containers'

const store = applyMiddleware(actionFn)(createStore)(reducer)

if (document.getElementById('flats')) {
  ReactDOM.render(
    <Provider store={store}>
      <containers.FlatListContainer />
    </Provider>,
    document.getElementById('flats')
  )
}
