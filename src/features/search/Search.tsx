import { Autocomplete, Container, TextField } from '@mui/material'
import { SearchBar } from './SearchBar'
import { DirectionToggleButton } from './DirectionToggleButton'
import { TimePicker } from './TimePicker'
import { useAppSelector } from '../../app/hooks'
import styles from './SearchStyles'

export const Search = () => {
  const startingFromMaria01 = useAppSelector(
    (state) => state.search.startingFromMaria01
  )
  const swapped = startingFromMaria01 ? 'swapped' : ''

  return (
    <Container sx={styles.Container}>
      <SearchBar
        className={swapped}
        label={startingFromMaria01 ? 'To' : 'From'}
        sx={styles.Autocomplete}
      />
      <Autocomplete
        className={swapped}
        disabled
        freeSolo
        options={[]}
        value="Maria 01, Kamppi, Helsinki"
        sx={styles.Autocomplete}
        renderInput={(params) => (
          <TextField {...params} label={startingFromMaria01 ? 'From' : 'To'} />
        )}
      />

      <div style={styles.DirectionToggleContainer}>
        <DirectionToggleButton/>
      </div>
      <div style={styles.TimePicker}>
        <TimePicker label={'Arrival time:'}/>
      </div>
    </Container>
  )
}
