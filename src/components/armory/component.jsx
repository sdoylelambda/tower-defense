import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DRAG_TOWER, DROP_TOWER } from './consts'
import * as walletActions from '../wallet/actions'
import * as armoryActions from './actions'

import Soldier from './soldier'

class Armory extends Component {
  clickUnit(tower, cost) {
    this.props.actions.dragTower(tower)
  }

  render() {
      const style = {
        position: 'relative',
        bottom: '64px',
        background: 'rgba(0, 0, 0, 0.2)',
        height: '80px',
        width: '100%',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'row-reverse',
      }

    return (
      <div style={style}>
        <Soldier
          handleClick={(e) => this.clickUnit('soldier', 20)}
          cost={20} disabled={this.props.wallet.balance < 20}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => (
  {
    wallet: state.wallet
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(armoryActions, dispatch)
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Armory)
