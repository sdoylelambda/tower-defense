import React from 'react'
import CellImage from './board/cell-image'

const Cell = (props) => {
  const style = {
    height: '33.33px',
    width: '33.33px',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    lineHeight: '33.33px',
  }

  return (
    <div style={style}>
      <CellImage value={ props.value } />
    </div>
  )
}

export default Cell
