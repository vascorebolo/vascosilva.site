import React from 'react'

import styled from 'styled-components'

import noise from './noise.png'
import colors from 'constants/colors'
import RandomP from 'components/RandomP'

const words = [
  'street photography',
  'portraits',
  'black and white',
  'color',
  'analog',
  '35 mm',
  '120 mm',
  'cameras',
  'landscapes',
  'portugal',
  'kodak',
  'tri-x',
  'summicron',
  'braga',
  'viana do castelo',
  'portugal',
  'film',
  'vasco',
  '50mm',
  '28mm',
]

const HomeStyled = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  border: 1px solid ${colors.grey.main};
  position: relative;
  overflow: hidden;
  background-color: rgba(68, 68, 68, .2);
  background-image: url(${props => props.noiseImg});
  background-position: cover;


  img {
    width: 20vw;
    border-radius: 10vw;
  }

  @media (max-width: 880px) {
    padding: 20px 0;
    height: 80vh;
  }

`

const Home = () => {
  return (
    <HomeStyled noiseImg={noise}>
      {
        words.map(word => (
          <RandomP>
            { word }
          </RandomP>
        ))
      }
    </HomeStyled>
  )
}

export default Home
