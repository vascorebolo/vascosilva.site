import React from 'react'
import { func, node } from 'prop-types'

import styled from 'styled-components'
import colors from 'constants/colors'

const ButtonStyled = styled.button`
  border: 1px solid ${colors.grey.main};
  background: transparent;
  text-transform: uppercase;
  height: 45px;
  width: 100%;
  font-size: 15px;
`

const Button = ({ children, callback }) => {
  const handleClick = () => {
    callback()
  }

  return (
    <ButtonStyled onClick={handleClick}>
      { children }
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: node.isRequired,
  callback: func.isRequired,
}

Button.displayName = 'Button'

export default Button
