import { ADD_ENTITY, REMOVE_ENTITY } from '../consts'
export default(state = [], payload) => {
  switch (payload.type) {
    case ADD_ENTITY:
      return [...state, payload.entity]
    case REMOVE_ENTITY:
      const index = state.indexOf(payload.entity)
      return [...state.slice(0, index), ...state.slice(index+1, state.length)]
    default:
      return state
  }
}
