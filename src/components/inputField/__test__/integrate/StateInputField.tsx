import React, { useState } from 'react'
import InputField from '../../index'

const StateInputField = (props: any) => {
  const [text, setText] = useState('')

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setText(prevState => evt.currentTarget.value)
  }

  return <InputField value={text} onChange={handleInputChange} {...props}/>
}

export { StateInputField }
