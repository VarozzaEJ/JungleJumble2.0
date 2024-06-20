import { AppState } from "../AppState.js"
import { gameService } from "../services/GameService.js"

export class GameController {
  checkJumble() {
    event.preventDefault()
    const form = event.target
    const textarea = form.checkJumble
    const newJumble = textarea.value
    // window.alert(newJumble)
    gameService.checkJumble(newJumble)
  }
}