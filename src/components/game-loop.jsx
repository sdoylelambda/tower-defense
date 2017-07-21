import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class GameLoop extends Component {
  componentDidMount() {
    setInterval( () => {
      this.update()
    }, 100)
  }

  update() {
    this.props.entities.forEach( entity => entity.update() )
  }

  render() {
    return this.props.children
  }
}

const mapStateToProps = (state, props) => (
  {
    entities: state.entities
  }
)

export default connect(mapStateToProps)(GameLoop)
