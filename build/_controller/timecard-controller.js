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
var TimeCardController = /** @class */ (function () {
    function TimeCardController() {
        this.path = '/timecard';
        this.router = express.Router();
        this.uploadTimecard = function (req, res) {
            if (req.body) {
                // add post here.
            }
        };
        this.initRoutes();
    }
    TimeCardController.prototype.initRoutes = function () {
        this.router.post(this.path, this.uploadTimecard);
    };
    return TimeCardController;
}());
exports.TimeCardController = TimeCardController;
