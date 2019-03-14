import React from 'react'
import { func, node, object } from 'prop-types'

import styled from 'styled-components'
import colors from 'constants/colors'

const ButtonStyled = styled.button`
  background: transparent;
  border: 1px solid ${colors.grey.main};
  cursor: pointer;
  font-size: 15px;
  height: 45px;
  padding: 8px 15px;
  text-transform: uppercase;
  width: auto;
`

const Button = ({ children, callback, style }) => {
  const handleClick = () => {
    callback()
  }

  return (
    <ButtonStyled onClick={handleClick} style={{ ...style }}>
      { children }
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: node.isRequired,
  callback: func.isRequired,
  style: object,
}

Button.defaultProps = {
  style: {},
}

Button.displayName = 'Button'

export default Button
