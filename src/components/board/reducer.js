import { MARK_UNAVAILABLE } from './consts'

const replaceCell = (tiles, position, replacement) => {
  return tiles.map( (row, x) => {
    return row.map( (cell, y) => {
      if (position.x === y && position.y === x) {
        return replacement
      } else {
        return tiles[x][y]
      }
    })
  })
}

export default(state = { tiles: [[]], entities: {} }, payload) => {
  switch (payload.type) {
    case MARK_UNAVAILABLE:
      const newMap = { ...state, tiles: replaceCell(state.tiles, payload.position, 0) }
      return newMap
    default:
      return state
  }
}
