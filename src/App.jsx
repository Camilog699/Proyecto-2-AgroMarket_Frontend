import React from 'react'
import Routes from './routes'
import ContextProvider from './contexts/index'

const App = () => (
  <ContextProvider>
    <Routes />
  </ContextProvider>
)

export default App
