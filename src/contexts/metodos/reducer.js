/* eslint-disable consistent-return */
/* eslint-disable eol-last */
import * as mutations from './mutations'

const metodosReducer = (state, { type, payload }) => {
  try {
    return mutations[type](state, payload)
  } catch (error) {
    if (/.* is not a function$/.test(error.message)) {
      throw new Error(`Action type "${type}" does not exist in ProductosContext (${error.message}).`)
    }
  }
}

export default metodosReducer