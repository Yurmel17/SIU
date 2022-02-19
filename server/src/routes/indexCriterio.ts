import { Router } from "express";

import criterioController from "../controllers/criterioController";

class IndexCriterio {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", criterioController.index);
  }
}

const indexCriterio = new IndexCriterio();
export default indexCriterio.router;
