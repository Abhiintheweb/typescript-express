"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    Test(req, res) {
        res.json({ "response": "Get Api" });
    }
    Test2(req, res) {
        res.send({ "response": "Post Api" });
    }
}
exports.IndexController = IndexController;
