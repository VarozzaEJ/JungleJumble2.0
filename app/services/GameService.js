import { AppState } from "../AppState.js"

class GameService {
  checkJumble(newJumble) {
    console.log(newJumble)
    const jumble = AppState.activeJumble
    console.log(jumble.body)
    if (jumble.body === newJumble) {
      window.alert('🥳 You Won!!')
    }
    else {
      window.alert('U STINK')
    }
  }
  startGame() {

  }
  endGame() {

  }

}
export const gameService = new GameService()