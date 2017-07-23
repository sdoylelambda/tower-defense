import entity from './components/entity/reducer'
import armory from './components/armory/reducer'
import wallet from './components/wallet/reducer'
import board from './components/board/reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    wallet,
    board,
    entities: entity,
    armory,
})

export default rootReducer
