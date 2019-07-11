import React, { useState } from 'react'
import { InputFieldWithConfirmButton } from '../../index'

const StateInputField = (props: any) => {
  const [text, setText] = useState('')

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setText(prevState => evt.currentTarget.value)
  }

  return <InputFieldWithConfirmButton value={text} onChange={handleInputChange} {...props}/>
}

export { StateInputField }
