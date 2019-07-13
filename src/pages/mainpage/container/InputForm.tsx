import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputFieldWithConfirmButton } from '../../../components/inputField'
import { TodoVO } from '../../../store/entities/todo'
import { addNewTodo } from '../../../store/actionCreator/sagas/todos'
import { AppState } from '../../../store/reducers'
import { Todo } from '../../../store/reducers/todos/types'

const examineIsDescContentOK = (desc: string) => (desc ? true : false)

export default function InputForm() {
  const [text, setText] = useState('')
  const dispatcher = useDispatch()
  const todoList = useSelector<AppState, Todo[]>(state => state.todo.todos)
  const newTodoMinute = useSelector<AppState, number>(state => state.appConfig.waitMinutes)

  const oneMinutesSec = 60 // 一分鐘60秒這樣的事情是不可能變了吧!!??

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
      if(todoList.length === 0){
        dispatcher(addNewTodo(new TodoVO(text, newTodoMinute * oneMinutesSec, true)))
      }else{
        dispatcher(addNewTodo(new TodoVO(text, newTodoMinute * oneMinutesSec, false)))
      }

      setText(prevText => '')
    },
    [text, newTodoMinute, setText],
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
