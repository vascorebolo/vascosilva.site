import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.div`
  opacity: .6;
  padding-top: 20px;

  p {
    font-size: 12px;
    text-align: right;
    width: 100%;
  }
`

const Footer = () => {
  const year = () => {
    return new Date().getFullYear()
  }

  return (
    <FooterStyled>
      <p>© Vasco Silva { year() } · All rights reserved</p>
    </FooterStyled>
  )
}

Footer.displayName = 'Footer'

export default Footer
