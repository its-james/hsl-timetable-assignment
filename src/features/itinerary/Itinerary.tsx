import { ListItem } from '@mui/material'
import { RouteLeg } from './RouteLeg'
import styles from './Itinerary.module.css'
import moment from 'moment'

export const Itinerary = (props: any) => {
  const { itinerary }: { itinerary: {
    walkDistance: number
    duration: number
    startTime: number
    endTime: number
    legs: Array<RouteLeg>
  } } = props

  const momentStartTime = moment(itinerary.startTime)
  const momentEndTime = moment(itinerary.endTime)

  const totalRouteLength = itinerary.legs.reduce(
    (total, leg) => total + leg.endTime - leg.startTime,
    0
  )

  return (
    <ListItem className={styles.wrapper}>
      <div className={styles.durationWrapper}>
        <div className={styles.startAndEndTime}>
          {momentStartTime.format('HH:mm')} - {momentEndTime.format('HH:mm')}
        </div>
        <div className={styles.duration}>
          {momentEndTime.diff(momentStartTime, 'm')} min
        </div>
      </div>
      {itinerary.legs.map((leg, i) => (
        <RouteLeg key={i} leg={leg} totalRouteLength={totalRouteLength} />
      ))}
    </ListItem>
  )
}
