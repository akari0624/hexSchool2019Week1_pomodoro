import React from 'react'
import { render as rtlRender, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ConfirmButtonComponent } from '../styled'

afterEach(cleanup)


describe('ConfirmButton Component test', () => {
  test('can render correct children text', () => {
    const mockText = '1234'
    const container = rtlRender(<ConfirmButtonComponent>{mockText}</ConfirmButtonComponent>)

    const element = container.getByText(mockText)
    expect(element.textContent).toBe(mockText)
  })

})
