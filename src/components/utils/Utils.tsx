import { IClockState } from '../../context/ClockContext'

export const formatterTime = (clockState: IClockState, timeType: string) => {
  return Number(clockState[timeType]) < 10 ? '0' + clockState[timeType] : clockState[timeType]
}

export const getToolTipText = (clockState: IClockState) => {
  return `${formatterTime(clockState, 'textHours')}:${formatterTime(clockState, 'textMinutes')}:${formatterTime(clockState, 'textSeconds')}`
}
