import React from 'react'
import {
  MainTaskBaWrapper,
  ToggleDoneCirclieWrapper,
  LeftWrapper,
  TodoDescWrapper,
  TomatoCountWrapper,
} from './styled'
import { useSelector } from 'react-redux'
import { AppState } from '../../../../store/reducers'
import { Todo } from '../../../../store/reducers/todos/types'

export default function NowTaskBar() {
  const nowTaskTodo = useSelector<AppState, Todo | null>(
    state => state.todo.nowTaskTodo,
  )

  if (nowTaskTodo) {
    return (
      <MainTaskBaWrapper>
        <ToggleDoneCirclieWrapper>
          <i className="material-icons">panorama_fish_eye</i>
        </ToggleDoneCirclieWrapper>
        <LeftWrapper>
          <TodoDescWrapper>{nowTaskTodo.desc}</TodoDescWrapper>
          <TomatoCountWrapper>123 123</TomatoCountWrapper>
        </LeftWrapper>
      </MainTaskBaWrapper>
    )
  }
  return <MainTaskBaWrapper />
}
