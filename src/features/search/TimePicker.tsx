import { TextField } from '@mui/material'
import { TimePicker as MuiTimePicker } from '@mui/lab'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterMoment from '@mui/lab/AdapterMoment'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { updateArrivalTime } from './searchSlice'

export const TimePicker = (props: any) => {
  const arrivalTime = useAppSelector((state) => state.search.arrivalTime)

  const dispatch = useAppDispatch()

  const handleChange = (newArrivalTime: Date | null) => {
    dispatch(updateArrivalTime(newArrivalTime?.toString() || null))
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MuiTimePicker
        {...props}
        ampm={false}
        value={arrivalTime}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField sx={{ alignSelf: 'end' }} {...params} />
        )}
      />
    </LocalizationProvider>
  )
}
