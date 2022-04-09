import React, { createContext, useReducer } from 'react'
import ProductoFactory from './modelFactory'
import productosReducer from './reducer'
import { mapActions } from './actions'

const initialState = {
  productos: [
    ProductoFactory('🥕 Zanahoria', 'Precio: $850 por unidad\n\nZanahoria es una planta herbácea de hojas recortadas, flores blancas y raíz puntiaguda, jugosa y comestible. Es la hortaliza más importante y de mayor y consumo de la familia.', 'http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c205.png'),
    ProductoFactory('🍌 Banano', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c133.png'),
    ProductoFactory('🍊 Naranja', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c16a.png'),
  ],
}

export const ProductosContext = createContext(null)

export const ProductosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productosReducer, initialState)

  return (
    <ProductosContext.Provider value={{ ...state, ...mapActions(dispatch) }}>
      {children}
    </ProductosContext.Provider>
  )
}
