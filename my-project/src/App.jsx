import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Components/Register'
import store from './Components/Store/Store'
import { Provider } from 'react-redux'
import Router from './Components/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Provider store={store}>
          <Router/>
        </Provider>
      </>
  )
}

export default App
