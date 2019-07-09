import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MoveCircle, { canvasDataTestId } from '../movecircle'

describe('MoveCircle test', () => {

  test('can render MoveCircle component', () => {

    const container = rtlRender(<MoveCircle width="400px" height="400px" isPaused={true} passedSeconds={200}/>)

    expect(container.getAllByTestId(canvasDataTestId).length).toBe(2)
  })


})
