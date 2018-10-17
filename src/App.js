import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import routes from './menuconfig'
import './App.css'

class App extends Component {
  // Will eventually put this in proper component for nav
  renderRoutes() {
      return routes.map((item, index) => {
        let dynamicComponent = require('./components/' + item.component + '/' + item.component).default

        return <Route
                  key={`${index}-route`}
                  path={item.path}
                  exact={item.exact}
                  component={dynamicComponent}
                />
      })
  }

  // Will eventually put this in proper component for nav
  renderLinks() {
    return routes.map((item, index) => {
      return <Link to={item.path} key={`${index}-link`}>{ item.label }</Link>
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Vasco Silva</h1>
          <nav>
            { this.renderLinks() }
          </nav>
          <div>
              { this.renderRoutes() }
          </div>
        </header>
      </div>
    );
  }
}

export default App
