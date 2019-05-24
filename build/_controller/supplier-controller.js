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
var SupplierController = /** @class */ (function () {
    function SupplierController() {
        this.path = '/suppliers';
        this.router = express.Router();
        this.getAllSuppliers = function (req, res) {
            res.json([{
                    "supplierId": "Nvidia",
                    "supplierName": "Nvidia Ltd.",
                    "contactName": "Juan Dela Cruz",
                    "address": "Somewhere",
                    "contactNumber": "0917 802 3974",
                    "email": "jdelacruz@nvidia.com"
                }]);
        };
        this.initRoutes();
    }
    SupplierController.prototype.initRoutes = function () {
        this.router.get(this.path, this.getAllSuppliers);
    };
    return SupplierController;
}());
exports.SupplierController = SupplierController;
