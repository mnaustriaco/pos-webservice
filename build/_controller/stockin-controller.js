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
var StockInController = /** @class */ (function () {
    function StockInController() {
        this.path = 'stockin';
        this.router = express.Router();
        this.insertStockRecord = function (req, res) {
            if (req.body) {
                // insert updating mongo db with model.
            }
            else {
                res.status(400).send();
            }
        };
        this.getStockRecordById = function (req, res) {
            console.log('entering here..');
            if (req.params) {
                console.log('is checking if having params..');
                if (req.params['id'] === '20137') {
                    res.json({
                        "stockId": "20137",
                        "date": "20190521",
                        "products": [
                            {
                                "productId": "12345678",
                                "stockIn": 30,
                                "supplierId": "Nvidia"
                            },
                            {
                                "productId": "87654321",
                                "stockIn": 24,
                                "supplierId": "AMD"
                            }
                        ]
                    });
                }
                else {
                    console.log('is no valid id :< ');
                    res.status(400).send("error retrieving id " + req.params['id']);
                }
            }
            else {
                console.log('is here');
                res.status(400).send();
            }
        };
        this.initRoutes();
    }
    StockInController.prototype.initRoutes = function () {
        this.router.post(this.path, this.insertStockRecord);
        this.router.get("/" + this.path + "/:id", this.getStockRecordById);
    };
    return StockInController;
}());
exports.StockInController = StockInController;
