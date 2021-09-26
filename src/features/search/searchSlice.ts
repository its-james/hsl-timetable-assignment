import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type MapPoint = {
  lat: number | null
  lon: number | null
}

interface SearchState {
  coordinates: MapPoint
  arrivalTime: string | null
  startingFromMaria01: boolean
}

const initialState: SearchState = {
  coordinates: {
    lat: null,
    lon: null
  },
  arrivalTime: new Date().toString(),
  startingFromMaria01: true
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetCoordinates (state) {
      state.coordinates = initialState.coordinates
    },
    updateCoordinates (state, action: PayloadAction<MapPoint>) {
      state.coordinates = action.payload
      return state
    },
    updateArrivalTime (state, action: PayloadAction<string | null>) {
      state.arrivalTime = action.payload
    },
    toggleDirection (state) {
      state.startingFromMaria01 = !state.startingFromMaria01
    }
  }
})

export const { resetCoordinates, updateCoordinates, updateArrivalTime, toggleDirection } =
  searchSlice.actions

export default searchSlice.reducer
