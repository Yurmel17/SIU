"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ Text: 'API IS /api/SIU' });
    }
}
exports.indexController = new IndexController();
