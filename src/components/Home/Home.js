import React from 'react'

import styled from 'styled-components'

import noise from './noise.png'
import colors from 'constants/colors'
import RandomP from 'components/RandomP'
import media from 'constants/breakpoints'

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
  'kodak',
  'tri-x',
  'summicron',
  'braga',
  'viana do castelo',
  'portugal',
  'film',
  'vasco silva',
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

  .name {
    bottom: 0;
    color: #fff;
    opacity: 0.8;
    padding-right: 20px;
    position: absolute;
    text-align: right;
    width: 100%;
  }

  ${media.m`
    padding: 20px 0;
    height: 80vh;
  `}
`

const Home = () => {
  return (
    <HomeStyled noiseImg={noise}>
      {
        words.map(word => (
          <RandomP key={word}>
            { word }
          </RandomP>
        ))
      }
      <p className="name">"<b>Mean</b>ingful Words" - 2019</p>
    </HomeStyled>
  )
}

export default Home
