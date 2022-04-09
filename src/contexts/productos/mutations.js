import productoFactory from './modelFactory'

export const CREATE = (state, payload) => {
  const { title, body } = payload
  const newProducto = productoFactory(title, body)

  return { ...state, productos: [...state.productos, newProducto] }
}

export const UPDATE = (state, payload) => {
  const { id, title, body } = payload
  const productos = state.productos.map((producto) => {
    if (producto.id === id) {
      return productoFactory(title, body, id)
    }

    return producto
  })

  return { ...state, productos }
}

export const DELETE = (state, productoId) => {
  const productos = state.productos.filter((producto) => {
    return productoId !== producto.id
  })

  return { ...state, productos }
}
