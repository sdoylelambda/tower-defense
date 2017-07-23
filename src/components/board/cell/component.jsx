import React from 'react'
import CellImage from './cell-image'

const Cell = (props) => {
  const style = {
    height: `${props.cellSize}px`,
    width: `${props.cellSize}px`,
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    lineHeight: '33.33px',
  }

  return (
    <div style={style}>
      <CellImage handleCellClick={(e) => props.handleCellClick(e, props.value)} value={ props.value } />
    </div>
  )
}

export default Cell
