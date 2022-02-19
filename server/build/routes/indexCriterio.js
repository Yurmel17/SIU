"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const criterioController_1 = __importDefault(require("../controllers/criterioController"));
class IndexCriterio {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", criterioController_1.default.index);
    }
}
const indexCriterio = new IndexCriterio();
exports.default = indexCriterio.router;
