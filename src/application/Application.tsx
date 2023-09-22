import * as React from 'react'
import { ClockContextProvider } from '../context/ClockContext'
import { ClockPage } from '../pages/ClockPage'

export const Application: React.FC = () => {
  return (
    <ClockContextProvider>
      <ClockPage />
    </ClockContextProvider>
  )
}
