"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carreraController_1 = __importDefault(require("../controllers/carreraController"));
class CarreraCriterio {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", carreraController_1.default.listar);
    }
}
const carreraCriterio = new CarreraCriterio();
exports.default = carreraCriterio.router;
