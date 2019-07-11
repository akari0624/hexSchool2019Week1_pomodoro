import React from 'react'
import { render as rtlRender, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { InputFieldWithConfirmButton } from '../index'
import { StateInputField } from './integrate/StateInputField'

afterEach(cleanup)

const mockOnChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {}

describe('InputField Component test', () => {
  test('can render correct placeholder', async () => {
    const placeHolderText = 'enter your input...'
    const container = rtlRender(<InputFieldWithConfirmButton placeholder={placeHolderText} />)

    const element = await container.findByPlaceholderText(placeHolderText)
    expect(element).toHaveAttribute('placeholder', placeHolderText)
  })

  test('can render corresponding value', async () => {
    const value = 'value on InputField'
    const container2 = rtlRender(
      <InputFieldWithConfirmButton value={value} onChange={mockOnChangeHandler} />,
    )
    const element = await container2.findByDisplayValue(value)
    expect(element).toHaveValue(value)
  })

  test('can render corresponding value', async () => {
    const value = 'value on InputField'

    const container2 = rtlRender(
      <InputFieldWithConfirmButton value={value} onChange={mockOnChangeHandler} />,
    )
    const element = await container2.findByDisplayValue(value)
    expect(element).toHaveValue(value)
  })

  test('when onChange fire can render new input value, intergrated with useState', async () => {
    const testId = 'theInput'
    const newTextInputEnterValue = 'new text input'
    const container2 = rtlRender(<StateInputField  data-testid={testId} />)
    const element = await container2.findByTestId(testId)
    fireEvent.change(element, { target: { value: newTextInputEnterValue } })
    expect(element).toHaveValue(newTextInputEnterValue)
  })
})
