import React, { Component } from 'react'
import styled from 'styled-components'

import Input from '../forms/Input'
import Button from '../Button'
import { mailConfigToken } from '../../mail-config'
import Loading from '../Loading/Loading'

class Contact extends Component {
  initialState = {
    name: '',
    email: '',
    message: '',
    sending: false,
  }

  constructor(props) {
    super(props)

    this.state = this.initialState
  }

  handleChange = (ev) => {
    const id = ev.target.id

    this.setState({ [id]: ev.target.value })
  }

  handleSend = () => {
    const { name, email, message } = this.state

    this.setState({ sending: true })

    Email.send({ // eslint-disable-line no-undef
      ...mailConfigToken,
      To : 'vasco.s.rebolo@gmail.com',
      From : "contact@vascosilva.site",
      Subject : "[Contact] vascosilva.site",
      Body : `
        ${name} - ${email}\n
        sent you the following message:\n
        ${message}
      `
    }).then(
      (response) => {
        console.log('=======', response)
        if (response === 'OK') {
          this.setState(this.initialState)
          alert('email enviado')
        }
      }
    );
  }

  render() {
    const { name, email, message, sending } = this.state

    return (
      <FormWrapper sending={sending}>
        <p style={{ paddingTop: 10, marginBottom: 20 }}>Send me a message using the form below</p>
        <Input
          id="email"
          value={email}
          handleChange={this.handleChange}
        />
        <Input
          id="name"
          value={name}
          handleChange={this.handleChange}
        />
        <Input
          id="message"
          value={message}
          handleChange={this.handleChange}
          textarea
        />
        <Button
          callback={this.handleSend}
          style={{ marginTop: 20, width: 150 }}
        >
          SEND
        </Button>
        <div className="overlay">
          <Loading />
          <br />
          <p>Sending message</p>
          <p>Be patient, server is lazy. It can take several seconds.</p>
        </div>
      </FormWrapper>
    )
  }
}

const FormWrapper = styled.div`
  max-width: 650px;
  position: relative;

  > .overlay {
    align-items: center;
    background-color: rgba(255, 255, 255, .6);
    bottom: 0;
    display: ${props => props.sending ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

export default Contact
