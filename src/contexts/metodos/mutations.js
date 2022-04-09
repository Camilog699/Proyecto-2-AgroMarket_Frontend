import metodoModel from './modelMetodos'

export const CREATE = (state, payload) => {
  const { title, body } = payload
  const newMetodo = metodoModel(title, body)

  return { ...state, metodos: [...state.metodos, newMetodo] }
}

export const UPDATE = (state, payload) => {
  const { id, title, body } = payload
  const metodos = state.metodos.map((metodo) => {
    if (metodo.id === id) {
      return metodoModel(title, body, id)
    }

    return metodo
  })

  return { ...state, metodos }
}

export const DELETE = (state, metodoId) => {
  const metodos = state.metodos.filter((metodo) => {
    return metodoId !== metodo.id
  })

  return { ...state, metodos }
}
