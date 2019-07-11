import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/reducers'
import {Todo} from '../../store/reducers/todos/types'
import { ListItem } from '../listItem'

export default function ListArea() {

  const todos = useSelector<AppState, Todo[]>( state => state.todo.todos)
  return (
    <div>
      {todos.map(todo => <ListItem key={todo.createTimestamp}>{todo.desc}</ListItem>)}
    </div>
  )
}
