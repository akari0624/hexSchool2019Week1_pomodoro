import React, { useState, useCallback } from 'react'
import { InputFieldWithConfirmButton } from '../../../components/inputField'

export default function InputForm() {

  const [text, setText] = useState('')

  const onInputContentChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const nowText = evt.currentTarget.value
      setText((prevText: string) => nowText)
    },
    [setText],
  )

   const handleOnFormSubmit = useCallback(
    (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault()
      console.log(`mock submit:${text}`)
    },
    [text],
  )


  return (
    <form onSubmit={handleOnFormSubmit}>
       <InputFieldWithConfirmButton
          placeholder={'ADD A NEW MISSION…'}
          value={text}
          onChange={onInputContentChange}
        />
      
    </form>
  )
}
