"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CriterioController {
    index(req, res) {
        res.send('Criterios');
    }
}
const criterioController = new CriterioController();
exports.default = criterioController;
