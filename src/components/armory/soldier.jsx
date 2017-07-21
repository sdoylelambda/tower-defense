import React, { Component } from 'react'
import imgDisabled from './soldier-disabled.png'
import img from './soldier.png'

import Price from './price'

const Soldier = (props) => {
  const style = {
    width: '74px',
    height: '74px',
    position: 'relative',
    margin: '0 10px',
  }

  return (
    <div style={style} onClick={props.handleClick}>
      <Price disabled={props.disabled} value={props.cost} />
      <img src={props.disabled ? imgDisabled : img} />
    </div>
  )
}

export default Soldier
