import { useState } from 'react'

import './App.css'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './utils/app.store'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <Provider store={appStore}>
  <Body/>
  </Provider>
  </>
  )
}

export default App
