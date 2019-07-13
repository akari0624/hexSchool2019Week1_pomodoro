export type AppConfigStateType = {
  taskOneTomatowaitMinutes: number,
  betweenTomatoTaskBreakMinutes: number,
  appNowStatus: AppCondition,
}

export enum AppCondition {
    ACTIVE = 'ACTIVE',
    BREAK = 'BREAK',
}