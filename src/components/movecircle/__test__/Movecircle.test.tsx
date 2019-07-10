import React from 'react'
import { render as rtlRender, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MoveCircle, { canvasDataTestId } from '../Movecircle'

afterEach(cleanup)

describe('MoveCircle test', () => {

  test('can render MoveCircle component', () => {

    const container = rtlRender(<MoveCircle width="400px" height="400px" isPaused={true} passedSeconds={200} tomatoClockMinutes={25} />)

    expect(container.getAllByTestId(canvasDataTestId).length).toBe(2)
  })


})
