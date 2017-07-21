const replaceCell = (state, position, replacement) => {
  return state.map( (row, x) => {
    return row.map( (cell, y) => {
      return position.x === x && position.y === y
      ? replacement
      : state[x][y]
    })
  })
}

export default(state = [[]], payload) => {
  switch (payload.type) {
    case 'PLACE_TOWER':
      return replaceCell(state, payload.position, payload.piece)
    default:
      return state
  }
}
