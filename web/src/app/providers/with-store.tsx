import { Provider } from 'react-redux'
// I don't like that we pass store here but whatever
import { persistedStore, appStore } from '../appStore'

export const withStore = (component: () => React.ReactNode) => () => {
  return <Provider store={appStore}>{component()}</Provider>
}
