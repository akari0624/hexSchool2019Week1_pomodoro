export type Todo = {
  desc: string,
  remainSec: number,
  createTimestamp: number,
  isComplete: boolean,
}

export type TodosReducerState = {
  todos: Todo[],
}