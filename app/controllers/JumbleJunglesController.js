import { AppState } from "../AppState.js";
import { JumbleJungle } from "../models/JumbleJungle.js";
import { jumbleJungleService } from "../services/JumbleJunglesService.js";
import { setHTML } from "../utils/Writer.js";

export class JumbleJunglesController {
  constructor() {
    this.drawJumble()
    AppState.on('activeJumble', this.drawJumble)
  }
  drawJumble() {
    const jumbled = AppState.jumbles
    let jumbleHTML = ""
    jumbled.forEach((jumble) => jumbleHTML += jumble.listTemplate)
    setHTML('Buttons', jumbleHTML)
  }

  selectJumble(ID) {
    jumbleJungleService.selectJumble(ID)
    const something = AppState.activeJumble
    setHTML('selectedJumble', something.selctedTemplate)
  }
}