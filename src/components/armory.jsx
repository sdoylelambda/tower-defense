import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as walletActions from '../actions/wallet'

import Soldier from './armory/soldier'

class Armory extends Component {
  clickUnit(cost) {
    console.log(`debit ${cost}`)
    this.props.actions.debit(cost)
  }

  render() {
      const style = {
        position: 'relative',
        bottom: '84px',
        background: 'rgba(0, 0, 0, 0.2)',
        height: '80px',
        width: '100%',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'row-reverse',
      }

    return (
      <div style={style}>
        <Soldier handleClick={(e) => this.clickUnit(20)} cost={20} disabled={this.props.wallet.balance < 20}/>
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
    actions: bindActionCreators(walletActions, dispatch)
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Armory)
