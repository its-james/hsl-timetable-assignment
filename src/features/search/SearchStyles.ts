import theme from '../../theme'

const styles = {
  Container: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: 'auto min-content 30%',
    marginTop: 2,
    padding: 0
  },
  Autocomplete: {
    transition: '.2s transform',
    '&:nth-of-type(1)': {
      marginBottom: 1,
      '&.swapped': {
        marginBottom: 0,
        marginTop: 1,
        transform: `translateY(calc(100% + ${theme.spacing(1)}))`
      }
    },
    '&:nth-of-type(2)': {
      marginTop: 1,
      '&.swapped': {
        marginTop: 0,
        marginBottom: 1,
        transform: `translateY(calc(-100% - ${theme.spacing(1)}))`
      }
    }
  },
  DirectionToggleContainer: {
    margin: theme.spacing(0.5),
    gridRow: '1 / span 2',
    display: 'flex',
    alignItems: 'center'
  },
  TimePicker: {
    gridRow: '2',
    marginTop: '8px'
  }
}

export default styles
