import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Test from './components/Test/Test'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Vasco Silva</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/test'>Test</Link>
          </nav>
          <div>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/test" component={Test} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </header>
      </div>
    );
  }
}

export default App
