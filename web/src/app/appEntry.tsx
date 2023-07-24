import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'
import { withProviders } from './providers'
import './styles/index.scss'

const root = document.getElementById('root') as HTMLElement

const App = withProviders(() => {
  return <RouterProvider router={appRouter()} />
})

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={persistedStore}> */}
    <App />
    {/* </PersistGate> */}
  </React.StrictMode>
)
