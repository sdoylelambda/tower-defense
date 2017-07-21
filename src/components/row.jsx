import React from 'react'
import Cell from './cell'

const Row = (props) => {
  const style = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    zIndex: 1,
  }

  return (
    <div style={style}>
      { props.cells.map( cell => <Cell value={cell} /> ) }
    </div>
  )
}

export default Row
