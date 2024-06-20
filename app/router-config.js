
import { GameController } from "./controllers/GameController.js";
import { JumbleJunglesController } from "./controllers/JumbleJunglesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [JumbleJunglesController, GameController],
    view: ``
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])