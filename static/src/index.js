/**
 * @fileoverview Root entrypoint of the App
 * @author Tom Effland
 */
import React from 'react'
import {render} from 'react-dom'
import {Provider, Store} from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { Link } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from './state/store'

import Home from './components/Home'
import Counter from './components/Counter'
import FourOhFour from './components/FourOhFour'

const appContainer = document.getElementById('react-app-container')
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  appContainer
)
