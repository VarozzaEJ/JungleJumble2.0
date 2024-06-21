import { AppState } from "../AppState.js"

class GameService {
  checkJumble(newJumble) {
    console.log(newJumble)
    const jumble = AppState.activeJumble
    const startTime = jumble.startTime
    const endTime = jumble.endTime
    let takenTime = endTime - startTime
    console.log(jumble.body)
    if (jumble.body === newJumble) {
      console.log('🥳 You Won!!', takenTime)

    }
    else {
      console.log('U STINK')
    }
  }

}
export const gameService = new GameService()