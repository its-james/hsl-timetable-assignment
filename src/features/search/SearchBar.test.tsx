import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Provider } from 'react-redux'
import { store } from '../../app/store'
import { SearchBar } from './SearchBar'

const { getByLabelText, getByRole, getAllByRole } = render(
  <Provider store={store}>
    <SearchBar label="To" />
  </Provider>
)

const input = getByLabelText('To')

test('searchbar is focusable', () => {
  userEvent.click(input)
  expect(input).toHaveFocus()
})

test('searchbar accepts input', () => {
  userEvent.type(input, 'Kamppi')
  expect(input).toHaveValue('Kamppi')
})

test('autocomplete appears', () => {
  waitFor(() => {
    expect(getByRole('presentation')).toBeInTheDocument()
  })
})

test('autocomplete option is selectable', () => {
  waitFor(() => {
    const kamppiOption = getAllByRole('option').find((el) => el.innerText === 'Kamppi, Helsinki' ? el : undefined)
    kamppiOption && userEvent.click(kamppiOption)
    expect(input).toHaveValue('Kamppi, Helsinki')
    expect(store.getState().search.coordinates).toMatchObject({ lat: 60.169137, lon: 24.931802 })
  })
})
