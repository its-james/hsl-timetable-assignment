import { useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { fetchAutocompleteOptions } from './autocompleteAPI'
import { useAppDispatch } from '../../app/hooks'
import { resetCoordinates, updateCoordinates } from './searchSlice'

export function SearchBar (props: any) {
  const [options, setOptions] = useState([])
  const [inputValue, setInputValue] = useState<string | null>('')

  const dispatch = useAppDispatch()

  const handleChange = (_: any, newValue: any | null) => {
    newValue
      ? dispatch(
        updateCoordinates({
          lat: newValue?.geometry?.coordinates[1],
          lon: newValue?.geometry?.coordinates[0]
        })
      )
      : dispatch(resetCoordinates())
  }
  const handleInputChange = (e: any, newValue: string | null) => {
    setInputValue(newValue)

    // Trim the input as to not fire off failing searches
    const trimmedNewValue = newValue?.trim()

    // if theres characters in the input then search for autocompletion
    if (trimmedNewValue) {
      fetchAutocompleteOptions(trimmedNewValue).then(setOptions)
    } else {
      setOptions([])
    }
  }

  return (
    <Autocomplete
      {...props}
      freeSolo
      options={options}
      onChange={handleChange}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField {...params} value={inputValue} label={props.label} />
      )}
      getOptionLabel={(option: any) => option?.properties?.label || ''}
      renderOption={(props, option: any) => {
        if (option?.properties?.label) {
          return (
            <li {...props} key={option.properties.id}>
              {option.properties.label}
            </li>
          )
        }
        return <li {...props} key="empty"></li>
      }}
    />
  )
}
