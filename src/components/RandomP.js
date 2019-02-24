import React from 'react'

import styled from 'styled-components'

const PStyled = styled.p`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  font-size: ${props => props.size}vw;
  line-height: 100%;
  text-transform: uppercase;
  transform: rotate(${props => props.angle}deg);
  font-weight: 700;
  color: transparent;
  text-shadow: 0 0 ${props => props.spread}px rgba(0,0,0,${props => props.op});
`

const RandomP = ({ children }) => {
  const randomInterval = (min, max, floor = true) => {
    const random = Math.random() * (max - min) + min
    console.log(random, Math.floor(random))
    return floor ? Math.floor(random) : random
  }

  const randomTop = randomInterval(0, 100)
  const randomLef = randomInterval(0, 100)
  const randomSize = randomInterval(3, 10)
  const randomOpacity = randomInterval(0.2, 0.5, false)
  const randomAngle = randomInterval(0, 180)
  const randomSpread = randomInterval(5, 30);

  return (
    <PStyled top={randomTop} left={randomLef} size={randomSize} op={randomOpacity} angle={randomAngle} spread={randomSpread}>
      { children }
    </PStyled>
  )
}

RandomP.displayName = 'RandomP'

export default RandomP
