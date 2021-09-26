import { useEffect } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import { useAppSelector } from '../../app/hooks'
import { Itinerary } from './Itinerary'
import { List as MuiList } from '@mui/material'
import moment from 'moment'

export function List () {
  const { coordinates, arrivalTime } = useAppSelector((state) => state.search)
  const startingFromMaria01 = useAppSelector(
    (state) => state.search.startingFromMaria01
  )

  const maria01Coordinates = {
    lat: 60.16685269272292,
    lon: 24.922506113828305
  }

  const to = startingFromMaria01 ? coordinates : maria01Coordinates
  const from = startingFromMaria01 ? maria01Coordinates : coordinates

  const GET_ITINERARIES = gql`
  {
    plan(
      from: {lat: ${from.lat}, lon: ${from.lon}}
      to: {lat: ${to.lat}, lon: ${to.lon}}
      numItineraries: 3
      arriveBy: true
      date: "${moment(arrivalTime).format('YYYY-MM-DD')}"
      time: "${moment(arrivalTime).format('HH:mm:ss')}"
    ) {
      itineraries {
        startTime
        endTime
        fares {
          components {
            fareId
          }
        }
        legs {
          startTime
          endTime
          mode
          duration
          distance
          trip {
            route {
              shortName
            }
          }
        }
      }
    }
  }`

  const [getItineraries, { data }] = useLazyQuery(GET_ITINERARIES)

  useEffect(() => {
    if (coordinates.lat && coordinates.lon) getItineraries()
  }, [coordinates.lat, coordinates.lon, arrivalTime, getItineraries])

  return (
    <MuiList>
      {data?.plan?.itineraries &&
        data.plan.itineraries.map((itinerary: Itinerary, i: number) => (
          <Itinerary key={i} itinerary={itinerary} />
        ))}
    </MuiList>
  )
}
