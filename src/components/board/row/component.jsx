import React from 'react'
import Cell from '../cell/component'

const Row = (props) => {
  const style = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    zIndex: 1,
  }

  return (
    <div style={style}>
      { props.cells.map( cell => <Cell cellSize={props.cellSize} handleCellClick={props.handleCellClick} value={cell} /> ) }
    </div>
    )
}

export default Row
