import React, { useState, useCallback } from 'react'
import InputFieldComponent from './styled'

type EventHandler = {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FunctionComponent<
  Partial<HTMLInputElement & EventHandler>
> = props => {
  return <InputFieldComponent {...props} />
}

export { InputField as default }
