import {Decimal} from 'decimal.js'


export type AppConfigStateType = {
  taskOneTomatowaitMinutes: Decimal,
  betweenTomatoTaskBreakMinutes: Decimal,
  appNowStatus: AppCondition,
}

export enum AppCondition {
    ACTIVE = 'ACTIVE',
    BREAK = 'BREAK',
}