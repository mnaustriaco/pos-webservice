"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var AccessController = /** @class */ (function () {
    function AccessController() {
        this.path = '/access';
        this.router = express.Router();
        this.getAllAccessControl = function (req, res) {
            res.json({
                "accType": "user",
                "accList": ["POS", "SUP"]
            });
        };
        this.initRoutes();
    }
    AccessController.prototype.initRoutes = function () {
        this.router.get(this.path, this.getAllAccessControl);
    };
    return AccessController;
}());
exports.AccessController = AccessController;
