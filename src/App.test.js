import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

it ('Should render without crashing', () => 
  expect(renderer.create(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )).toBeDefined()
)