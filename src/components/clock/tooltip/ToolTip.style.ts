import { createUseStyles } from 'react-jss'

export const useToolTipStyles = createUseStyles({
  tooltip: {
    visibility: 'hidden',
    opacity: '0',
    width: 'max-content',
    height: 'max-content',
    backgroundColor: '#f2f2f2',
    color: '#000',
    textAlign: 'center',
    borderRadius: '5px',
    padding: '5px',
    position: 'absolute',
    zIndex: 100,
    bottom: '125%',
    left: '50%',
    transition: 'opacity 0.3s',
  }
})
