import * as mutations from './mutations'


const metodosPagoReducer = (state, { type, payload }) => {
    try {
      return mutations[type](state, payload)
    } catch (error) {
      if (/.* is not a function$/.test(error.message)) {
        throw new Error(`Action type "${type}" does not exist in MetodosContext (${error.message}).`)
      }
    }
  }
  
  export default metodosPagoReducer