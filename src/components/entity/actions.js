import { ADD_ENTITY, REMOVE_ENTITY, MOVE_ENTITY } from './consts'

export const addEntity = (entity) => {
  return {
      type: ADD_ENTITY,
      entity
  }
}

export const removeEntity = (entity) => {
  return {
      type: REMOVE_ENTITY,
      entity
  }
}

export const moveEntity = (entity) => {
  return {
      type: MOVE_ENTITY,
      entity
  }
}
