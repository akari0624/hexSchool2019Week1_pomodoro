export type Todo = {
  desc: string,
  remainSec: number,
  createTimestamp: number,
  isComplete: boolean,
  nowTask: boolean,
}

export type TodosReducerState = {
  todos: Todo[],
  nowTaskTodo: Todo | null,
}