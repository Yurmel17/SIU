import { Request, Response } from "express";

import pool from "../database";

class CriterioController {
  public async listar(req: Request, res: Response): Promise<void> {
    const criterio = await pool.query("SELECT * FROM CriterioAdmision", [
      req.body,
    ]);
    res.json(criterio);
  }

  public async buscar(req: Request, res: Response): Promise<any> {
    const { idCriterio_Admision } = req.params;
    const criterio_admision = await pool.query(
      "SELECT porcentajeCN, porcentajeLC, porcentajeMA, porcentajeSC, porcentajeIN FROM CriterioAdmision WHERE id = ?",
      [idCriterio_Admision]
    );
    if (criterio_admision.length > 0) {
      return res.json(criterio_admision[0]);
    }
    res
      .status(404)
      .json({ Text: "No se encontró el criterio de admision de la carrera" });
  }

  public async comparar(req: Request, res: Response): Promise<any> {
    const { idCriterio_Admision } = req.params;
    let { puntajeCN, puntajeLC, puntajeMA, puntajeSC, puntajeIN } = req.body;
    const resultado = await pool.query(
      "SELECT porcentajeCN, porcentajeLC, porcentajeMA, porcentajeSC, porcentajeIN FROM CriterioAdmision WHERE id = ?",
      [idCriterio_Admision]
    );
    const resCN = puntajeCN * resultado[0].porcentajeCN;
    const resLC = puntajeLC * resultado[0].porcentajeLC;
    const resMA = puntajeMA * resultado[0].porcentajeMA;
    const resSC = puntajeSC * resultado[0].porcentajeSC;
    const resIN = puntajeIN * resultado[0].porcentajeIN;

    const puntPond = resCN + resLC + resIN + resMA + resSC;

    const puntajeTotal = await pool.query(
      "SELECT puntajeMinimo FROM PuntajeCorte WHERE carrera_id = ? ORDER BY (anio) desc, periodo desc",
      [idCriterio_Admision]
    );
    const arr: boolean[] = [];
    console.log(puntPond, puntajeTotal[0].puntajeMinimo);
    console.log(puntPond, puntajeTotal[1].puntajeMinimo);
    console.log(puntPond, puntajeTotal[2].puntajeMinimo);
    console.log(puntPond, puntajeTotal[3].puntajeMinimo);
    console.log(puntPond, puntajeTotal[4].puntajeMinimo);
    console.log(puntPond, puntajeTotal[5].puntajeMinimo);
    for (let i = 0; i < 6; i++) {
      if (puntPond > puntajeTotal[i].puntajeMinimo) {
        arr[i] = true;
      }else{
        arr[i] = false;
      }
    }
    return res.json(arr);
  }
}

const criterioController = new CriterioController();
export default criterioController;
