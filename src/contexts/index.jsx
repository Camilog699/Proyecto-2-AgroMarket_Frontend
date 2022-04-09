import React from 'react'
// import { ProductosProvider } from './productos'
import { MetodosPagoProvider } from './metodos'
// export { ProductosContext } from './productos'
export { MetotodosPagoContext } from './metodos'

const ContextProvider = ({ children }) => (

  <MetodosPagoProvider>
    {children}
  </MetodosPagoProvider>

)

export default ContextProvider
