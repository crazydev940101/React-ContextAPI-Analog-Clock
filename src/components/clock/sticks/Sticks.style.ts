import { createUseStyles } from 'react-jss'

export const useSticksStyles = createUseStyles({
  stick: {
    position: 'absolute',
    width: (props: { isHour: boolean }) => (props.isHour ? '1rem' : '0.2rem'),
    height: (props: { isHour: boolean }) => (props.isHour ? '1px' : '0.2px'),
    backgroundColor: 'var(--text-color-light)',
    transformOrigin: 'left',
  },
})