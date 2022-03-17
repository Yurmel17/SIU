import { Router } from "express";

import criterioController from "../controllers/criterioController";

class IndexCriterio {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", criterioController.listar);
    this.router.get("/:idCriterio_Admision", criterioController.buscar);
    this.router.get("/comparacion/:idCriterio_Admision", criterioController.comparar);
  }
}

const indexCriterio = new IndexCriterio();
export default indexCriterio.router;
