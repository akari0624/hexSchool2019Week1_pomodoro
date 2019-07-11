import {Todo} from '../reducers/todos/types'

class TodoImpl implements Todo {

  desc: string;  
  remainSec: number;
  createTimestamp: number;
  isComplete: boolean;

  constructor(desc: string, remainSec: number) {
    this.desc = desc
    this.remainSec = remainSec
    this.createTimestamp = Math.floor((Date.now() / 1000))
    this.isComplete = false
  }

  
}

export {TodoImpl as TodoVO}