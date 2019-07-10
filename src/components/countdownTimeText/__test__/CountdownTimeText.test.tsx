import React from 'react'
import { render as rtlRender, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TimeText from '../index'

afterEach(cleanup)

describe('TimeTextComponent test', () => {
  test('can render correct time text', async () => {
    const container = rtlRender(
      <TimeText wholeMinutes={25} passedSeconds={30} />,
    )

    const element = await container.findByText('24:30')
    expect(element.textContent).toBe('24:30')
  })

  test('can render "00:00" text', () => {
    const container2 = rtlRender(
      <TimeText wholeMinutes={25} passedSeconds={1500} />,
    )
    const element = container2.getByText('00:00')
    expect(element.textContent).toBe('00:00')
  })

  test('if passSecond bigger than wholeMinutes, still render "00:00" text', () => {
    const container3 = rtlRender(
      <TimeText wholeMinutes={25} passedSeconds={1504} />,
    )
    const element = container3.getByText('00:00')
    expect(element.textContent).toBe('00:00')
  })
})
