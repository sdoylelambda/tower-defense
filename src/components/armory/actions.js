import { DRAG_TOWER, DROP_TOWER } from './consts'

export const dragTower = (tower) => {
  return {
      type: DRAG_TOWER,
      tower
  }
}

export const dropTower = (tower, position) => {
  return {
      type: DROP_TOWER,
      position
  }
}
