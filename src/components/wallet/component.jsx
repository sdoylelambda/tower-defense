import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as walletActions from './actions'

class Wallet extends Component {

  componentDidMount() {
    const { wallet, actions, initialAmount } = this.props
    if(wallet.initialAmountGiven) return
    actions.credit(initialAmount)
    actions.initialAmountGiven()
  }

  render() {
    const { wallet } = this.props
    const style = {
      position: 'absolute',
      top: '10px',
      left: '20px',
      zIndex: 100,
      backgroundColor: 'yellow',
      borderRadius: '10px',
      padding: '10px 20px',
    }

    return (
      <div style={style}>
        ${ wallet.balance }
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

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)
