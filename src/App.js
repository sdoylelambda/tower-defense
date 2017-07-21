import React, { Component } from 'react'
import Board from './components/board'
import GameLoop from './components/game-loop'

import initialBoardState from './maps/0001.js'

import { Provider } from 'react-redux'
import Store from './store'
const StoreInstance = Store({
  board: initialBoardState,
})

class App extends Component {
  render() {
    return (
      <Provider store={StoreInstance}>
        <GameLoop>
          <Board />
        </GameLoop>
      </Provider>
    )
  }
}

export default App
