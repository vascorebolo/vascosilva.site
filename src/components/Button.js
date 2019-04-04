import React from 'react'
import { func, node, object, bool } from 'prop-types'

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

  :focus {
    outline: 1px solid ${colors.grey.main};
  }

  :active {
    background-color: transparent;
  }

  &:disabled {
    opacity: .5;
  }
`

const Button = ({ children, callback, style, enabled }) => {
  const handleClick = () => {
    callback()
  }

  return (
    <ButtonStyled
      onClick={handleClick}
      disabled={!enabled}
      style={{ ...style }}
    >
      { children }
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: node.isRequired,
  callback: func.isRequired,
  enabled: bool,
  style: object,
}

Button.defaultProps = {
  enabled: true,
  style: {},
}

Button.displayName = 'Button'

export default Button
