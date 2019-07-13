import {Decimal} from 'decimal.js'

export type Todo = {
  desc: string,
  remainSec: Decimal,
  createTimestamp: number,
  isComplete: boolean,
  nowTask: boolean,
  tomatoCount: number,
  nowTomatoCount: number,
}

export type TodosReducerState = {
  todos: Todo[],
  nowTaskTodo: Todo | null,
}