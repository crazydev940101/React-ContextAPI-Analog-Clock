import { createUseStyles } from 'react-jss'

export const useAxisStyles = createUseStyles({
  axis: {
    width: '.75rem',
    height: '.75rem',
    backgroundColor: 'var(--first-color)',
    borderRadius: '50%',
    border: '2px solid var(--body-color)',
    zIndex: 'var(--z-tooltip)',
  },
})
