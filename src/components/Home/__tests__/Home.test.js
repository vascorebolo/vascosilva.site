import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../Home'

it ('Should render without crashing', () => 
  expect(renderer.create(<Home />)).toBeDefined()
)