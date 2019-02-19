import React from 'react'

import styled from 'styled-components'

const LoadingSimpleStyled = styled.div`
  animation: loadingAnim .8s linear infinite;
  font-size: 50px;
  opacity: .2;
  transform-origin: center center;

  @keyframes loadingAnim {
    0 {transform: scale(1);}
    50% {transform: scale(2);}
    100% {transform: scale(1);}
  }
`

const LoadingSimple = () => {
  return (
    <LoadingSimpleStyled>
      ·
    </LoadingSimpleStyled>
  )
}

LoadingSimple.displayName = 'LoadingSimple'

export default LoadingSimple
