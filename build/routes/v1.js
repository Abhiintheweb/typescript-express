"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestController_1 = require("../controllers/TestController");
class Routes {
    constructor() {
        this.IndexController = new TestController_1.IndexController();
    }
    routes(app) {
        app.route('/').get(this.IndexController.Test)
            .post(this.IndexController.Test2);
    }
}
exports.Routes = Routes;
