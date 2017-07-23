import React, { Component } from 'react'
import Board from './components/board/component'
import GameLoop from './components/game-loop/component'

import tileMapState from './maps/0001.js'

import { Provider } from 'react-redux'
import Store from './store'
const StoreInstance = Store({
  board: { tiles: tileMapState, },
})

class App extends Component {
  render() {
    return (
      <Provider store={StoreInstance}>
        <GameLoop>
          <Board tiles={tileMapState} cellSize={33}/>
        </GameLoop>
      </Provider>
    )
  }
}

export default App
