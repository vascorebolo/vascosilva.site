import React from 'react'
import styled from 'styled-components'

import colors from '../../constants/colors'

const InputStyled = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 10px;

  input,
  textarea {
    border: 1px solid ${colors.grey.main};
    flex: 1;
    height: 40px;
    margin-top: 20px;
    padding: 0 8px;
    font-size: 16px;
    color: 1px solid ${colors.grey.main};

    &::placeholder {
      color: ${colors.grey.main};
      opacity: .5;
    }

    :focus {
      outline: 1px solid ${colors.grey.main};
    }
  }

  textarea {
    padding-top: 8px;
    resize: none;
    overflow: auto;
    height: 150px;
  }

  label {
    position: absolute;
    top: -3px;
    animation: mymove .3s;
    perspective: 100px:
  }

  @keyframes mymove {
    from {top: -6px; opacity: 0; transform: rotateX(-90deg);}
    to {top: -3px; opacity: 1; transform: rotateX(0deg);}
  }
`

const Input = ({ id, value, handleChange, handleKeyUp, textarea }) => {
  const renderLabel = () => {
    return value !== ''
      ? <label htmlFor={id}>{ id }</label>
      : null
  }

  return (
    <InputStyled>
      { renderLabel() }
      {
        textarea
          ? (
            <textarea
              id={id}
              type="text"
              value={value}
              onChange={handleChange}
              placeholder={id}
              onKeyUp={handleKeyUp && handleKeyUp()}
            />
          )
          : (
            <input
              id={id}
              type="text"
              value={value}
              onChange={handleChange}
              onKeyUp={handleChange}
              placeholder={id}
              onKeyUp={handleKeyUp && handleKeyUp()}
            />
          )
      }

    </InputStyled>
  )
}

Input.defaultProps = {
  handleKeyUp: null,
}

Input.displayName = 'Input'

export default Input
