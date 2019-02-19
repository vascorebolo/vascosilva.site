import React, { Component } from 'react'

import RenderZone from './components/RenderZone'

import 'App.css'
import MainNav from 'components/MainNav'
import routes from 'menuconfig'
import Footer from 'components/Footer'


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
        <Footer />
      </div>
    );
  }
}

export default App
