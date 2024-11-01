import React from 'react'
import Body from "../src/components/Body"
import { Provider } from 'react-redux'
import appStore from './utils/AppStore'

const App = () => {
  
  return (
    <Provider store={appStore}>
      <div className=''>
      <Body/>
      </div>
      </Provider>

  )
}

export default App