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
          <nav>
            <MainNav routes={routes} title={'Vasco Silva'} />
          </nav>
        </header>
        <div className="MainContainer">
          <RenderZone routes={routes} />
        </div>
      </div>
    );
  }
}

export default App
