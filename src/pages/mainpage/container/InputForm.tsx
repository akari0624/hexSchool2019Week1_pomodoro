import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { InputFieldWithConfirmButton } from '../../../components/inputField'
import { TodoReducerActionTypes } from '../../../store/actionTypes/reducers/todos'
import { TodoVO } from '../../../store/entities/todo'

const examineIsDescContentOK = (desc: string) => (desc ? true : false)

export default function InputForm() {
  const [text, setText] = useState('')
  const dispatcher = useDispatch()

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
      if (!examineIsDescContentOK(text)) {
        return
      }

      dispatcher({
        type: TodoReducerActionTypes.Add_TODO,
        payload: new TodoVO(text, 1500),
      })
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
