import { DEBIT_WALLET, CREDIT_WALLET, INITIAL_AMOUNT_GIVEN } from './consts'

const initialState = {
  balance: 0,
  initalAmountGiven: false,
}

export default(state = initialState, payload) => {
  switch (payload.type) {
    case DEBIT_WALLET:
      return {...state, balance: state.balance - payload.amount }
    case CREDIT_WALLET:
      return {...state, balance: state.balance + payload.amount }
    case INITIAL_AMOUNT_GIVEN:
      return {...state, initalAmountGiven: true }
    default:
      return state
  }
}
