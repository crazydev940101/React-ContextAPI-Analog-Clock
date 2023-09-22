import * as React from 'react'
import { useCircleStyles } from './Circle.style'
import { ToolTip } from '../tooltip/ToolTip'

interface TooltipStyle {
  left: number
  top: number
  visibility?: 'visible' | 'hidden'
  opacity?: number
}

interface Props {
  tooltipText: string | undefined
  children: React.ReactNode
}

export const Circle: React.FC<Props> = (props) => {
  const { container } = useCircleStyles()
  const { children, tooltipText } = props
  const [tooltipStyle, setTooltipStyle] = React.useState<TooltipStyle>({
    left: 0,
    top: 0,
    visibility: 'hidden',
    opacity: 0,
  })

  const handleMouseMove = (event: React.MouseEvent) => {
    // Do something with the mouse event
    const { clientX, clientY } = event
    const newTooltipStyle: TooltipStyle = {
      left: clientX + 10,
      top: clientY + 10,
      visibility: 'visible',
      opacity: 1,
    }
    setTooltipStyle(newTooltipStyle)
  }

  const handleMouseLeave = () => {
    const newTooltipStyle: TooltipStyle = {
      ...tooltipStyle,
      visibility: 'hidden',
      opacity: 0,
    }
    setTooltipStyle(newTooltipStyle)
  }

  return (
    <>
      <div className={container} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      <ToolTip tooltipStyle={tooltipStyle} tooltipTimeText={tooltipText} />
    </>
  )
}
