"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var product_model_1 = __importDefault(require("../_model/product-model"));
var ProductController = /** @class */ (function () {
    function ProductController() {
        this.path = '/products';
        this.router = express.Router();
        this.getProduct = function (req, res) {
        };
        this.getOutOfStock = function (req, res) {
        };
        this.addProduct = function (req, res) {
        };
        this.modifyProduct = function (req, res) {
        };
        this.deleteProduct = function (req, res) {
        };
        //all http method for products.
        this.getAllProducts = function (req, res) {
            try {
                var allProducts = product_model_1.default.find();
                res.send(allProducts);
            }
            catch (e) {
                res.send("Server Error \n " + e);
            }
        };
        this.initRoutes();
    }
    ProductController.prototype.initRoutes = function () {
        this.router.get(this.path, this.getAllProducts);
    };
    return ProductController;
}());
exports.ProductController = ProductController;
