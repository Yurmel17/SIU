"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const puntajeController_1 = __importDefault(require("../controllers/puntajeController"));
class IndexPuntaje {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", puntajeController_1.default.listar);
        this.router.get("/:idPuntaje", puntajeController_1.default.buscar);
    }
}
const indexPuntaje = new IndexPuntaje();
exports.default = indexPuntaje.router;
