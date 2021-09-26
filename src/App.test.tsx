import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'

test('app renders', async () => {
  const { getByText, getByLabelText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(getByText('Arrival time:')).toBeInTheDocument()
  expect(getByLabelText('From')).toBeInTheDocument()
  expect(getByLabelText('To')).toBeInTheDocument()
})