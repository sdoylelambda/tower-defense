import { DEBIT_WALLET, CREDIT_WALLET, INITIAL_AMOUNT_GIVEN } from './consts'

export const debit = (amount) => {
  return {
      type: DEBIT_WALLET,
      amount
  }
}

export const credit = (amount) => {
  return {
      type: CREDIT_WALLET,
      amount
  }
}

export const initialAmountGiven = () => {
  return {
      type: INITIAL_AMOUNT_GIVEN,
      initalAmountGiven: true
  }
}
