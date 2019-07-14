import {Todo} from '../reducers/todos/types'
import {Decimal} from 'decimal.js'

class TodoImpl implements Todo {

  desc: string
  remainSec: Decimal
  createTimestamp: number
  isComplete: boolean
  nowTask: boolean
  tomatoCount: number
  nowTomatoCount: number

  constructor(desc: string, remainSec: Decimal, nowTask: boolean) {
    this.desc = desc
    this.remainSec = remainSec
    this.createTimestamp = Math.floor((Date.now() / 1000))
    this.isComplete = false
    this.nowTask = nowTask
    this.tomatoCount = 1
    this.nowTomatoCount = 0
  }

  
}

export {TodoImpl as TodoVO}