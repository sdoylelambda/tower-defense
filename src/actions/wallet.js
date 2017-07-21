import { DEBIT_WALLET, CREDIT_WALLET, INITIAL_AMOUNT_GIVEN } from '../consts'

export const debit = (amount) => {
  console.log(`debiting ${amount}`)
  return {
      type: DEBIT_WALLET,
      amount
  }
}

export const credit = (amount) => {
  console.log(`crediting ${amount}`)
  return {
      type: CREDIT_WALLET,
      amount
  }
}

export const initialAmountGiven = () => {
  console.log(`initial amount given`)
  return {
      type: INITIAL_AMOUNT_GIVEN,
      initalAmountGiven: true
  }
}
