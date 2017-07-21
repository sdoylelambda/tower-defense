import React, { Component } from 'react'

class Piece extends Component {
  constructor(props) {
    super(props)
  }
  render() {
      const style = {
      }

    return (
      <div style={style}>
        <img src={this.props.img} />
      </div>
    )
  }
}

export default Piece
