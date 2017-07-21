import React from 'react'
import Armory from './armory'
import Wallet from './wallet'
import Row from './row'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as boardActions from '../actions/board'

const Board = (props) => {
  const style = {
    position: 'relative',
    overflow: 'hidden',
    margin: "25px auto",
    width: '800px',
    height: '600px',
    background: '#bbe8bb',
  }

  return (
    <div style={style}>
      <Wallet initialAmount={40}/>
      { props.board.map( row => <Row cells={row} /> ) }
      <Armory />
    </div>
  )
}

const mapStateToProps = (state, props) => (
  {
    board: state.board
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(boardActions, dispatch)
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Board)
