import { Request, Response } from "express";

import pool from "../database";

class CriterioController {
  public async listar(req: Request, res: Response): Promise<void> {
    const criterio = await pool.query("SELECT * FROM criterio_admision", [
      req.body,
    ]);
    res.json(criterio);
  }

  public async buscar(req: Request, res: Response): Promise<any> {
    const { idCriterio_Admision } = req.params;
    const criterio_admision = await pool.query(
      "SELECT * FROM criterio_admision WHERE idCriterio_Admision = ?",
      [idCriterio_Admision]
    );
    if (criterio_admision.length > 0) {
      return res.json(criterio_admision[0]);
    }
    res
      .status(404)
      .json({ Text: "No se encontró el criterio de admision de la carrera" });
  }
}

const criterioController = new CriterioController();
export default criterioController;
