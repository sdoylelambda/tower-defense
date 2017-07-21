import { PLACE_TOWER } from '../consts'

export const placeTower = (position, tower) => {
  console.log(`placing tower ${tower} at ${position}`)
  return {
      type: PLACE_TOWER,
      position,
      tower,
  }
}
