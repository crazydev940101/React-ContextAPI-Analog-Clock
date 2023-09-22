import React, { createContext, useState } from 'react'

export interface IClockState {
  [key: string]: number | string
  readonly hours: number
  readonly minutes: number
  readonly seconds: number
  readonly textHours: number
  readonly textMinutes: number
  readonly textSeconds: number
  readonly ampm: string
}

interface IClockContext {
  clockState: IClockState
  updateClock: () => void
}

const initialClockState: IClockState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  textHours: 0,
  textMinutes: 0,
  textSeconds: 0,
  ampm: '',
}

export const ClockContext = createContext<IClockContext>({
  clockState: initialClockState,
  updateClock: () => {
    // Intentionally empty 
  },
})

export const ClockContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [clockState, setClockState] = useState<IClockState>(initialClockState)
  const updateClock = () => {
    const date = new Date()
    const hh = date.getHours() * 30
    const mm = date.getMinutes() * 6
    const ss = date.getSeconds() * 6
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    let ampm: 'AM' | 'PM'
    if (hours >= 12) {
      hours -= 12
      ampm = 'PM'
    } else {
      ampm = 'AM'
    }
    if (hours === 0) {
      hours = 12
    }
    setClockState((prevState) => ({
      ...prevState,
      hours: hh + mm / 12 + ss / (24 * 60),
      minutes: mm + ss / 60,
      seconds: ss,
      textHours: hours,
      textMinutes: minutes,
      textSeconds: seconds,
      ampm: ampm,
    }))
  }
  return (
    <ClockContext.Provider value={{ clockState, updateClock }}>
      {children}
    </ClockContext.Provider>
  )
}