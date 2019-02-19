import React from 'react'

import styled from 'styled-components'
import ImageLoader from 'react-loading-image'

import mainimg from './mainimg.jpg'
import colors from 'constants/colors'
import Loading from 'components/Loading'

const HomeStyled = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  border: 1px solid ${colors.grey.main};

  p {
    font-weight: 700;
  }

  img {
    max-height: 90%;
    max-width: 90%;
  }

  @media (max-width: 880px) {
    padding: 20px 0;
    margin-top: 50%;
    transform: translateY(-50%);
  }
`

const Home = () => {
  return (
    <HomeStyled>
      <ImageLoader
        src={mainimg}
        loading={() => <Loading />}
        image={props => <img
          src={mainimg}
          alt='home_page_photo'
        /> }
        error={() => <div>Error</div>}
      />
    </HomeStyled>
  )
}

export default Home
