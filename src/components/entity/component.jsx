import React, { Component } from 'react'

import { ENTITY_TOWER, ENTITY_ENEMY_GROUND, ENTITY_ENEMY_AIR } from './consts'
import * as entityActions from './actions'

class Entity extends Component {

  constructor(props) {
    super(props)
    props.movementType = this.movementType(props.type)
  }

  movementType(type) {
    switch(type) {
      case 'soldier':
        return ENTITY_TOWER
    }
  }

  update() {
    this.move()
  }

  move() {
    switch(this.props.movementType) {
      case ENTITY_ENEMY_GROUND:

      default:
        throw(`No move w for ${this.props.type}`)
    }
  }

  render() {
    return (
      <div />
    )
  }
}

export default Entity
