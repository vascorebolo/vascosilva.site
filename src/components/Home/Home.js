import React from 'react'

import styled from 'styled-components'
import ImageLoader from 'react-loading-image'

import bgImg from './bg2.jpg'
import bgImgMobile from './bg3.jpg'
import colors from 'constants/colors'
import Loading from 'components/Loading'

const HomeStyled = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  border: 1px solid ${colors.grey.main};
  position: relative;
  overflow: hidden;
  background-image: url(${props => props.bgImg});
  background-size: cover;

  img {
    width: 20vw;
    border-radius: 10vw;
  }

  p {
    font-weight: 700;
    color: #fff;
    position: auto;
    text-align: center;
    font-size: 12vw;
    opacity: 0;
    transform: translateY(-700%);
  }

  @media (max-width: 880px) {
    padding: 20px 0;
    height: 80vh;
    background-image: url(${props => props.bgImgMobile});

    p {
      top: auto;
      bottom: 5vh;
      left: auto;
      right: -10vw;
    }
  }

`

const Home = () => {
  return (
    <HomeStyled bgImg={bgImg} bgImgMobile={bgImgMobile}>
      <p>
      VASCO SILVA
      </p>
    </HomeStyled>
  )
}

export default Home
