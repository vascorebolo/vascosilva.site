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
    sent: false,
    sendEnabled: false,
  }

  constructor(props) {
    super(props)

    this.state = this.initialState
  }

  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(email)
  }

  checkEnabledState = () => {
    const { name, email, message } = this.state

    if (name.length > 0 && this.validateEmail(email) > 0 && message.length > 0) {
      this.setState({ sendEnabled: true })
    } else {
      this.setState({ sendEnabled: false })
    }
  }

  handleChange = (ev) => {
    const id = ev.target.id

    this.setState({ [id]: ev.target.value })
    this.checkEnabledState()
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
        if (response === 'OK') {
          this.setState({ ...this.initialState, sent: true })
        }
      }
    );
  }

  handleSentOk = () => {
    this.setState({ sent: false, sendEnabled: false })
  }

  renderOverlay = () => {
    const { sending, sent } = this.state

    if (sending) {
      return (
        <>
          <Loading />
          <br />
          <p>Sending message</p>
          <p>
            I spent my money on film, so the server's slow. <br />
            Be patient, it can take several seconds <span role="img" aria-label="smile">😊</span>
          </p>
        </>
      )
    } else if (sent) {
      return (
        <>
          <p><span role="img" aria-label="smile">👍</span></p>
          <p>Message sent. Thanks!</p>
          <Button
            callback={this.handleSentOk}
            style={{ marginTop: 20, width: 100 }}
          >
            Ok
          </Button>
        </>
      )
    }
  }

  render() {
    const { name, email, message, sending, sent, sendEnabled } = this.state

    return (
      <FormWrapper sending={sending} sent={sent}>
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
          enabled={sendEnabled}
        >
          SEND
        </Button>
        <div className="overlay">
          { this.renderOverlay() }
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
    background-color: rgba(255, 255, 255, .90);
    bottom: 0;
    display: ${props => props.sending || props.sent ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;

    p {
      text-align: center;
    }
  }
`

export default Contact
