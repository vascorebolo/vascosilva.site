import React from 'react'

import styled from 'styled-components'

const DivLoading = styled.div`
  margin-top: 40px;
  min-width: 100px;

  .line {
    display: inline-block;
    width: 20px;
    height: 20px !important;
    border-radius: 50%;
    background-color: #444;
    margin: 0 10px;
  }

  & .line:nth-last-child(1) {
    animation: loadingC .8s .1s linear infinite;
  }

  & .line:nth-last-child(2) {
    animation: loadingC .8s .18s linear infinite;
  }

  & .line:nth-last-child(3) {
    animation: loadingC .8s .26s linear infinite;
  }

  @keyframes loadingC {
    0 {transform: scale(1);}
    50% {transform: scale(0);}
    100% {transform: scale(1);}
  }
`

const Loading = () => {
  return (
    <DivLoading>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </DivLoading>
  )
}


Loading.displayName = 'Loading'

export default Loading
