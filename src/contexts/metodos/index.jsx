import React, { createContext, useReducer } from 'react'
import metodoModel from './modelMetodos'
import metodosReducer from './reducer'
import { mapActions } from './actions'

const initial = {
  metodos: [
    metodoModel(' PaylPal', 'Paga con PSE desde cualquier lugar donde estes', 'http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c205.png'),
    metodoModel(' Tarjeta de credito', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c133.png'),
    metodoModel(' PSE', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c16a.png'),
  ],
}

export const MetotodosPagoContext = createContext(null)

export const MetodosPagoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(metodosReducer, initial)

  return (
    <MetotodosPagoContext.Provider value={{ ...state, ...mapActions(dispatch) }}>
      {children}
    </MetotodosPagoContext.Provider>
  )
}
