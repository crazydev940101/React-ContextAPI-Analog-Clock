import * as React from 'react'
import { useContainerStyles } from './Container.style'

interface Props {
  children: React.ReactNode
}

export const Container: React.FC<Props> = (props) => {
  const { container } = useContainerStyles()
  const { children } = props
  return <section className={container}>{children}</section>
}
