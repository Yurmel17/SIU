import { Router } from "express";

import puntajeController from "../controllers/puntajeController";

class IndexPuntaje {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", puntajeController.index);
  }
}

const indexPuntaje = new IndexPuntaje();
export default indexPuntaje.router;
