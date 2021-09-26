interface RouteLeg {
  mode: 'WALK' | 'SUBWAY' | 'BUS' | 'TRAM' | 'RAIL'
  startTime: number
  endTime: number
  trip: {
    route: {
      shortName: String
    }
  }
}

interface Itinerary {
  walkDistance: number
  duration: number
  startTime: number
  endTime: number
  legs: Array<RouteLeg>
}

interface ItineraryState {
  list?: Array<Itinerary>
}
