import { ADD_ENTITY, REMOVE_ENTITY } from '../consts'

export const addEntity = (entity) => {
  console.log(`adding entity ${entity}`)
  return {
      type: ADD_ENTITY,
      entity
  }
}

export const removeEntity = (entity) => {
  console.log(`removing entity ${entity}`)
  return {
      type: REMOVE_ENTITY,
      entity
  }
}
