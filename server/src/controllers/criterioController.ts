import { Request, Response } from "express";

import pool from '../database'

class CriterioController{
    public index(req: Request, res: Response){
        pool.query('DESCRIBE criterio_admision');
        res.json('criterios')
    }
}

const criterioController = new CriterioController();
export default criterioController;