import { DRAG_TOWER, DROP_TOWER } from './consts'

const initialState = {
  currentDragItem: null,
}

export default(state = initialState, payload) => {
  switch (payload.type) {
    case DRAG_TOWER:
      return {...state, currentDragItem: payload.tower }
    case DROP_TOWER:
      return {...state, tower: payload.tower, position: payload.position }
    default:
      return state
  }
}
