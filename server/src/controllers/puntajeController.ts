import { Request, Response } from "express";

import pool from "../database";

class PuntajeController {
  public async listar(req: Request, res: Response): Promise<void> {
    const puntaje = await pool.query("SELECT * FROM puntaje_linea_corte", [
      req.body,
    ]);
    res.json(puntaje);
  }

  public async buscar(req: Request, res: Response): Promise<any> {
    const { idPuntaje } = req.params;
    const puntaje_id = await pool.query(
      "SELECT * FROM puntaje_linea_corte WHERE idPuntaje = ?",
      [idPuntaje]
    );
    if (puntaje_id.length > 0) {
      return res.json(puntaje_id[0]);
    }
    res.status(404).json({ Text: "No se encontró el puntaje de la carrera" });
  }
}

const puntajeController = new PuntajeController();
export default puntajeController;
