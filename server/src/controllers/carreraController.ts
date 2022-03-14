import { Request, Response } from "express";

import pool from "../database";

class CarreraController {
  public async listar(req: Request, res: Response): Promise<void> {
    const nameCarrera = await pool.query("SELECT nombreCarrera FROM Carrera", [
      req.body,
    ]);
    res.json(nameCarrera);
  }

//   public async buscar(req: Request, res: Response): Promise<any> {
//     const { idPuntaje } = req.params;
//     const puntaje_id = await pool.query(
//       "SELECT * FROM PuntajeCorte WHERE carrera_id = ?",
//       [idPuntaje]
//     );
    
//     if (puntaje_id.length > 0){
//       return res.json(puntaje_id);
//     }
//     res.status(404).json({ Text: "No se encontró el puntaje de la carrera" });
//   }
}

const carreraController = new CarreraController();
export default carreraController;
