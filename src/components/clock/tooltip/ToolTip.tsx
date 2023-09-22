import * as React from 'react'
import { useToolTipStyles } from './ToolTip.style'

interface Props {
  tooltipStyle: React.CSSProperties
  tooltipTimeText: string | undefined
}

export const ToolTip: React.FC<Props> = (props) => {
  const { tooltip } = useToolTipStyles()
  const { tooltipStyle, tooltipTimeText } = props
  return (
      <div className={tooltip} style={tooltipStyle}>
        {tooltipTimeText}
      </div>
  )
}