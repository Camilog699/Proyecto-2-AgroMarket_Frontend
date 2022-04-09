import React from 'react'
import { ProductosProvider } from './productos'

export { ProductosContext } from './productos'

const ContextProvider = ({ children }) => (
  <ProductosProvider>
    {children}
  </ProductosProvider>
)

export default ContextProvider
