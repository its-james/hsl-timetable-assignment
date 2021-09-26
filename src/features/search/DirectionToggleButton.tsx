import { IconButton } from '@mui/material'
import SwapVertIcon from '@mui/icons-material/SwapVert'

import { useAppDispatch } from '../../app/hooks'
import { toggleDirection } from './searchSlice'

export const DirectionToggleButton = () => {
  const dispatch = useAppDispatch()

  const handleClick = () => dispatch(toggleDirection())

  return (
    <IconButton onClick={handleClick}>
      <SwapVertIcon aria-label="swap" />
    </IconButton>
  )
}
