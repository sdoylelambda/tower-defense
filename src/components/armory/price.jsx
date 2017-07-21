import React from 'react'

const Price = (props) => {
  const style = {
    margin: '-10px 0',
    position: 'relative',
    top: '70px',
    left: '45px',
    zIndex: 1,
    color: props.disabled ? 'black' : 'green',
  }

  return (
    <div style={style}>
      { props.value }
    </div>
  )
}

export default Price
