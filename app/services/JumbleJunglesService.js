import { AppState } from "../AppState.js"

class JumbleJungleService {
  selectJumble(ID) {
    const selectedJumble = AppState.jumbles.find((jumble) => jumble.id == ID)
    AppState.activeJumble = selectedJumble
    console.log(AppState.activeJumble)
  }

}
export const jumbleJungleService = new JumbleJungleService()