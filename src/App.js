import React, { Component } from 'react'
import MainNav from './components/MainNav'
import RenderZone from './components/RenderZone'
import routes from './menuconfig'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Vasco Silva</h1>
          <nav>
            <MainNav routes={routes} />
          </nav>
          <RenderZone routes={routes} />
        </header>
      </div>
    );
  }
}

export default App
