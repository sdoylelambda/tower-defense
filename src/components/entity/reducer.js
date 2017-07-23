import { ADD_ENTITY, REMOVE_ENTITY, MOVE_ENTITY} from './consts'
import { arrayWithoutById } from '../../utils'
export default(state = [], payload) => {
  switch (payload.type) {
    case ADD_ENTITY:
      return [...state, payload.entity]
    case REMOVE_ENTITY:
      return arrayWithoutById(state, payload.entity.id)
    case MOVE_ENTITY:
      const without = arrayWithoutById(state, payload.entity.id)
      const newEntity = {...payload.entity}
      return
    default:
      return state
  }
}
