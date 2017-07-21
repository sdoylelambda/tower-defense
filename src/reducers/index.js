import wallet from './wallet'
import board from './board'
import entities from './entities'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    wallet,
    board,
    entities
})

export default rootReducer
