import React, { Component } from 'react'

import availablePlace from './available-place.png'
import roadPiece from './road-piece.png'

const AVAILABLE_PLACE = 1
const ROAD_PIECE = 5

class CellImage extends Component {
  imageSrc() {
    switch(this.props.value) {
      case AVAILABLE_PLACE:
        return availablePlace
      case ROAD_PIECE:
        return roadPiece
    }
  }
  style() {
    return {
      width: '100%',
      height: '100%',
    }
  }

  render() {
    return (
      this.imageSrc()
      ? <img style={this.style()} src={this.imageSrc()} />
      : null
    )
  }
}

export default CellImage
