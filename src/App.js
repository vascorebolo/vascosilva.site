import React, { Component } from 'react'

import RenderZone from './components/RenderZone'
import styled from 'styled-components'

import MainNav from 'components/MainNav'
import routes from 'menuconfig'
import Footer from 'components/Footer'
import mainBreakPoint from 'constants/breakpoints'
import media from 'constants/breakpoints'

const AppStyled = styled.div`
  width: 80vw;
  margin: 0 auto;
  height: 70vh;

  .MainContainer {
    padding: 10px 0 0 0;
    height: 90%;
  }

  ${media.m`
    height: auto;
    margin: 0;
    padding: 0 10px;
    width: 100%;
  `}
`

class App extends Component {
  render() {
    return (
      <AppStyled mainBreakPoint={mainBreakPoint}>
        <header className="App-header">
          <nav>
            <MainNav routes={routes} title={'Vasco Silva'} />
          </nav>
        </header>
        <div className="MainContainer">
          <RenderZone routes={routes} />
        </div>
        <Footer />
      </AppStyled>
    );
  }
}

export default App
