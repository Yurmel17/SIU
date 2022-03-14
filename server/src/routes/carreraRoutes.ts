import { Router } from "express";

import carreraController from "../controllers/carreraController";

class CarreraCriterio {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", carreraController.listar);
  }
}

const carreraCriterio = new CarreraCriterio();
export default carreraCriterio.router;
