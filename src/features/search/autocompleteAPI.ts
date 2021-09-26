const endpoint = 'https://api.digitransit.fi/geocoding/v1/autocomplete'

export const fetchAutocompleteOptions = (text: string) =>
  fetch(
    `${endpoint}?text=${text}&focus.point.lat=60.16684735538505&focus.point.lon=24.922452469651454&sources=osm`
  )
    .then((res) => res.json())
    .then((data) => data.features)
