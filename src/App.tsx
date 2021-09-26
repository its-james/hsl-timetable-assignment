import { Container } from '@mui/material'
import { Search } from './features/search/Search'
import { List as ItineraryList } from './features/itinerary/List'

export default function App () {
  return (
    <Container maxWidth="sm">
      <Search />
      <ItineraryList />
    </Container>
  )
}
