import * as React from 'react'
import { useAxisStyles } from './Axis.style'

export const Axis: React.FC = () => {
  const { axis } = useAxisStyles()
  return <span className={axis} />
}
