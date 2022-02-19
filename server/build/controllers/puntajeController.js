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
class PuntajeController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const puntaje = yield database_1.default.query("SELECT * FROM puntaje_linea_corte", [
                req.body,
            ]);
            res.json(puntaje);
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPuntaje } = req.params;
            const puntaje_id = yield database_1.default.query("SELECT * FROM puntaje_linea_corte WHERE idPuntaje = ?", [idPuntaje]);
            if (puntaje_id.length > 0) {
                return res.json(puntaje_id[0]);
            }
            res.status(404).json({ Text: "No se encontró el puntaje de la carrera" });
        });
    }
}
const puntajeController = new PuntajeController();
exports.default = puntajeController;
