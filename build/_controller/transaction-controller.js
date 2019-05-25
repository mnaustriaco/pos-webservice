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
var TransactionController = /** @class */ (function () {
    function TransactionController() {
        this.path = '/transactions';
        this.router = express.Router();
        this.uploadTransactions = function (req, res) {
            if (req.body) {
                //parse req.body here to either model or mongoose schema.
            }
        };
        this.initRoutes;
    }
    TransactionController.prototype.initRoutes = function () {
        this.router.post(this.path, this.uploadTransactions);
    };
    return TransactionController;
}());
exports.TransactionController = TransactionController;
