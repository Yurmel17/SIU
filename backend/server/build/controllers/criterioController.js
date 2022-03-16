"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CriterioController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criterio = yield database_1.default.query("SELECT * FROM CriterioAdmision", [
                req.body,
            ]);
            res.json(criterio);
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCriterio_Admision } = req.params;
            const criterio_admision = yield database_1.default.query("SELECT porcentajeCN, porcentajeLC, porcentajeMA, porcentajeSC, porcentajeIN FROM CriterioAdmision WHERE id = ?", [idCriterio_Admision]);
            if (criterio_admision.length > 0) {
                return res.json(criterio_admision[0]);
            }
            res
                .status(404)
                .json({ Text: "No se encontró el criterio de admision de la carrera" });
        });
    }
    comparar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCriterio_Admision } = req.params;
            let { puntajeCN, puntajeLC, puntajeMA, puntajeSC, puntajeIN } = req.body;
            const resultado = yield database_1.default.query("SELECT porcentajeCN, porcentajeLC, porcentajeMA, porcentajeSC, porcentajeIN FROM CriterioAdmision WHERE id = ?", [idCriterio_Admision]);
            const resCN = puntajeCN * resultado[0].porcentajeCN;
            const resLC = puntajeLC * resultado[0].porcentajeLC;
            const resMA = puntajeMA * resultado[0].porcentajeMA;
            const resSC = puntajeSC * resultado[0].porcentajeSC;
            const resIN = puntajeIN * resultado[0].porcentajeIN;
            const puntPond = resCN + resLC + resIN + resMA + resSC;
            const puntajeTotal = yield database_1.default.query("SELECT puntajeMinimo FROM PuntajeCorte WHERE carrera_id = ? ORDER BY (anio) desc, periodo desc", [idCriterio_Admision]);
            const arr = [];
            console.log(puntPond, puntajeTotal[0].puntajeMinimo);
            console.log(puntPond, puntajeTotal[1].puntajeMinimo);
            console.log(puntPond, puntajeTotal[2].puntajeMinimo);
            console.log(puntPond, puntajeTotal[3].puntajeMinimo);
            console.log(puntPond, puntajeTotal[4].puntajeMinimo);
            console.log(puntPond, puntajeTotal[5].puntajeMinimo);
            for (let i = 0; i < 6; i++) {
                if (puntPond > puntajeTotal[i].puntajeMinimo) {
                    arr[i] = true;
                }
                else {
                    arr[i] = false;
                }
            }
            return res.json(arr);
        });
    }
}
const criterioController = new CriterioController();
exports.default = criterioController;
