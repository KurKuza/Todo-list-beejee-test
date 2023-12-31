import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './app/App'
import store from './store/store'
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Provider>
  </BrowserRouter>
)
