import { CSSProperties } from 'react'

import WalkIcon from '@mui/icons-material/DirectionsWalk'
import BusIcon from '@mui/icons-material/DirectionsBus'
import SubwayIcon from '@mui/icons-material/DirectionsSubway'
import TramIcon from '@mui/icons-material/Tram'
import TrainIcon from '@mui/icons-material/Train'
import styles from './RouteLeg.module.css'

interface Props {
  leg: {
    mode: 'WALK' | 'SUBWAY' | 'BUS' | 'TRAM' | 'RAIL'
    startTime: number
    endTime: number
    trip: {
      route: {
        shortName: String
      }
    }
  }
  totalRouteLength: number
}

export const RouteLeg = (props: Props) => {
  const { leg, totalRouteLength } = props

  const routeLegIcons = {
    WALK: <WalkIcon />,
    SUBWAY: <SubwayIcon />,
    BUS: <BusIcon />,
    TRAM: <TramIcon />,
    RAIL: <TrainIcon />
  }

  const legRouteLength = leg.endTime - leg.startTime
  const legWidth = (legRouteLength / totalRouteLength) * 100

  const legStyles: CSSProperties = {
    width: `${legWidth}%`
  }

  if (legWidth < 8) {
    return (
      <span
        className={[styles.leg, styles[leg.mode]].join(' ')}
        style={legStyles}
      >
        <WalkIcon sx={{ fill: 'none' }} />
      </span>
    )
  }

  return (
    <span
      className={[styles.leg, styles[leg.mode]].join(' ')}
      style={legStyles}
    >
      {routeLegIcons[leg.mode]}
      {leg.mode !== 'WALK' && leg?.trip?.route?.shortName}
      {leg.mode === 'WALK' &&
        Math.max(Math.round((leg.endTime - leg.startTime) / 1000 / 60), 1)}
    </span>
  )
}
