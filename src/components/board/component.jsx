import React from 'react'
import Armory from '../armory/component'
import Wallet from '../wallet/component'
import Row from './row/component'
import Entity from '../entity/component'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as boardActions from './actions'
import * as walletActions from '../wallet/actions'
import * as armoryActions from '../armory/actions'

const Board = (props) => {
  const style = {
    position: 'relative',
    overflow: 'hidden',
    margin: "25px auto",
    width: '800px',
    height: '600px',
    background: '#bbe8bb',
  }

  const handleCellClick = (e, value) => {
    const position = { x: e.clientX, y: e.clientY }
    if(value !== 1 || !props.armory.currentDragItem) return
    const cell = cellAt(position)
    const cost = costOfTower(props.armory.currentDragItem)

    props.actions.debit(cost)
    props.actions.dropTower(props.armory.currentDragItem, cell)
    props.actions.markUnavailable(cell)
    props.actions.addEntity(<Entity type={props.armory.currentDragItem} />)
  }

  const costOfTower = (tower) => {
    switch(tower) {
      case 'soldier':
        return 20;
      case 'gunner':
        return 40;
    }
  }

  const cellAt = (position) => {
    const x = Math.floor(position.x / props.cellSize)-1
    const y = Math.floor(position.y / props.cellSize)-1
    return {x, y}
  }

  return (
    <div style={style}>
      <Wallet initialAmount={40}/>
      { props.board.tiles.map( row => <Row cellSize={props.cellSize} handleCellClick={handleCellClick} cells={row} /> ) }
      <Armory />
    </div>
  )
}

const mapStateToProps = (state, props) => (
  {
    board: state.board,
    wallet: state.wallet,
    armory: state.armory,
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators({...boardActions, ...armoryActions, ...walletActions}, dispatch)
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Board)
