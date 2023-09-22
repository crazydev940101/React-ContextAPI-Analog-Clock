import * as React from 'react'
import { useSticksStyles } from './Sticks.style'

export const Stick: React.FC = () => {
  const hourStickClasses = useSticksStyles({ isHour: true }) as Record<string, string>
  const minuteStickClasses = useSticksStyles({ isHour: false }) as Record<string, string>

  const hourStickStyles = Array.from({ length: 12 }, (_, index) => {
    const angle = index * 30
    const radians = angle * (Math.PI / 180)
    const cos = Math.cos(radians)
    const sin = Math.sin(radians)
    const distanceFromCenter = 45
    const top = `${50 - cos * distanceFromCenter}%`
    const left = `${50 + sin * distanceFromCenter}%`
    const transform = `rotate(${angle + 90}deg)`

    return {
      top,
      left,
      transform,
    }
  })

  const minuteStickStyles = Array.from({ length: 60 }, (_, index) => {
    const angle = index * 6
    const radians = angle * (Math.PI / 180)
    const cos = Math.cos(radians)
    const sin = Math.sin(radians)
    const distanceFromCenter = 45
    const top = `${50 - cos * distanceFromCenter}%`
    const left = `${50 + sin * distanceFromCenter}%`
    const transform = `rotate(${angle + 90}deg)`

    if (index % 5 !== 0) {
      return {
        top,
        left,
        transform,
      }
    } else {
      return {}
    }
  })

  return (
    <>
      {hourStickStyles.map((style, index) => (
        <span key={index} className={hourStickClasses.stick} style={style} />
      ))}
      {minuteStickStyles.map((style, index) => (
        <span key={index} className={minuteStickClasses.stick} style={style} />
      ))}
    </>
  )
}