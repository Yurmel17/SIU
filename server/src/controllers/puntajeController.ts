import { Request, Response } from "express";

import pool from "../database";

class PuntajeController {
  public index(req: Request, res: Response) {
    pool.query("DESCRIBE puntaje_linea_corte");
    res.json("puntajes");
  }
}

const puntajeController = new PuntajeController();
export default puntajeController;
