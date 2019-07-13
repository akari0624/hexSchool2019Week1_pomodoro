import {Todo} from '../reducers/todos/types'

class TodoImpl implements Todo {

  desc: string
  remainSec: number
  createTimestamp: number
  isComplete: boolean
  nowTask: boolean
  tomatoCount: number
  nowTomatoCount: number

  constructor(desc: string, remainSec: number, nowTask: boolean) {
    this.desc = desc
    this.remainSec = remainSec
    this.createTimestamp = Math.floor((Date.now() / 1000))
    this.isComplete = false
    this.nowTask = nowTask
    this.tomatoCount = 1
    this.nowTomatoCount = 1
  }

  
}

export {TodoImpl as TodoVO}