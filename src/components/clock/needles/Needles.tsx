import * as React from 'react'
import { useTimeStyles } from './Needles.style'

interface Props {
  value: number
  className: string
}

export const Needle: React.FC<Props> = (props) => {
  const classes = useTimeStyles() as Record<string, string>
  const { className } = props
  return (
    <span
      style={{ transform: 'rotateZ(' + props.value + 'deg)' }}
      className={classes[className]}
    />
  )
}
