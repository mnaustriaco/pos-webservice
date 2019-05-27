"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
require('dotenv').config();
var ProductController = /** @class */ (function () {
    function ProductController() {
        var _this = this;
        this.path = '/products';
        this.router = express.Router();
        this.getProduct = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, findObj, retrievedProducts, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.pid;
                        findObj = {};
                        findObj['productId'] = id;
                        return [4 /*yield*/, product_model_1.default.find(findObj)];
                    case 1:
                        retrievedProducts = _a.sent();
                        res.json(retrievedProducts);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        res.status(500).send("unable to retrieve product. \n " + e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //define minimum out of stock sa environments
        this.getOutOfStock = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var OOS_MIN, allProducts, filteredProducts, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        OOS_MIN = process.env.OOS_MIN;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, product_model_1.default.find()];
                    case 2:
                        allProducts = _a.sent();
                        filteredProducts = allProducts.filter(function (product) {
                            console.log(product.stockQty + " : " + OOS_MIN);
                            return product.stockQty < +OOS_MIN;
                        });
                        res.send(filteredProducts);
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        res.send("Server Error \n " + e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        //batch upload or single upload.
        //experimental si batch.
        this.addProduct = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var newProducts, saveProducts, savedResults, e_3, newProduct, saveProduct, savedResult, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Array.isArray(req.body)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        newProducts = req.body;
                        saveProducts = new product_model_1.default(newProducts);
                        return [4 /*yield*/, saveProducts.collection.insertMany(newProducts)];
                    case 2:
                        savedResults = _a.sent();
                        res.json(savedResults);
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        res.status(500).send("server error. unable to insert this list \n " + e_3);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 8];
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        newProduct = req.body;
                        saveProduct = new product_model_1.default(newProduct);
                        return [4 /*yield*/, saveProduct.save()];
                    case 6:
                        savedResult = _a.sent();
                        res.json(savedResult);
                        return [3 /*break*/, 8];
                    case 7:
                        e_4 = _a.sent();
                        res.status(500).send("server error. unable to insert this product. " + e_4);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        }); };
        this.modifyProduct = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var pid, updated, findObj, retrievedProducts, id, updateProduct, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        pid = req.params.pid;
                        updated = req.body;
                        console.log(updated);
                        findObj = {};
                        findObj['productId'] = pid;
                        return [4 /*yield*/, product_model_1.default.find(findObj)];
                    case 1:
                        retrievedProducts = _a.sent();
                        id = retrievedProducts[0].id;
                        return [4 /*yield*/, product_model_1.default.findByIdAndUpdate(id, updated, { new: true })];
                    case 2:
                        updateProduct = _a.sent();
                        console.log("hello : " + updateProduct);
                        res.json(updateProduct);
                        return [3 /*break*/, 4];
                    case 3:
                        e_5 = _a.sent();
                        res.status(500).send("unable to update product. \n " + e_5);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.deleteProduct = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var pid, findObj, retrievedProducts, id, deleted, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        pid = req.params.pid;
                        findObj = {};
                        findObj['productId'] = pid;
                        return [4 /*yield*/, product_model_1.default.find(findObj)];
                    case 1:
                        retrievedProducts = _a.sent();
                        id = retrievedProducts[0].id;
                        return [4 /*yield*/, product_model_1.default.findByIdAndDelete(id)];
                    case 2:
                        deleted = _a.sent();
                        console.log("hello : " + deleted);
                        res.json(deleted);
                        return [3 /*break*/, 4];
                    case 3:
                        e_6 = _a.sent();
                        res.status(500).send("unable to update product. \n " + e_6);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        //all http method for products.
        this.getAllProducts = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var allProducts, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, product_model_1.default.find()];
                    case 1:
                        allProducts = _a.sent();
                        res.send(allProducts);
                        return [3 /*break*/, 3];
                    case 2:
                        e_7 = _a.sent();
                        res.send("Server Error \n " + e_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.initRoutes();
    }
    ProductController.prototype.initRoutes = function () {
        this.router.get(this.path, this.getAllProducts);
        this.router.post(this.path, this.addProduct);
        this.router.get(this.path + "/oos/", this.getOutOfStock);
        this.router.get(this.path + "/:pid", this.getProduct);
        this.router.patch(this.path + "/:pid", this.modifyProduct);
        this.router.delete(this.path + "/:pid", this.deleteProduct);
    };
    return ProductController;
}());
exports.ProductController = ProductController;
