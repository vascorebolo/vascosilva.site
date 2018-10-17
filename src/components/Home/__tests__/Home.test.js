import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../Home'

it ('Should render without crashing', () => {
  return expect(renderer.create(<Home />)).toBeDefined()
})