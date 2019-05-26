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
var transaction_model_1 = __importDefault(require("../_model/transaction-model"));
//we are using product model coz we gonna update it. get it get it?
var TransactionController = /** @class */ (function () {
    function TransactionController() {
        var _this = this;
        this.path = '/transactions';
        this.router = express.Router();
        this.uploadTransactions = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var transaction, uploadTxn, uploadResult, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transaction = req.body;
                        transaction.purchaseDate = new Date(transaction.purchaseDate);
                        console.log(transaction.purchaseDate);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.subtractInvoicesToProducts(transaction.invoices)];
                    case 2:
                        _a.sent();
                        uploadTxn = new transaction_model_1.default(transaction);
                        return [4 /*yield*/, uploadTxn.save()];
                    case 3:
                        uploadResult = _a.sent();
                        res.json(uploadResult);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        res.status(500).send('unable to send to db\n' + e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.getTransactionsByDate = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var from, to, transactions, filtered, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        from = new Date(req.params.from);
                        to = new Date(req.params.to);
                        console.log(from + " - " + to);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, transaction_model_1.default.find()];
                    case 2:
                        transactions = _a.sent();
                        filtered = transactions.filter(function (transaction) {
                            console.log('validating...');
                            console.log(transaction.purchaseDate >= from);
                            console.log(transaction.purchaseDate <= to);
                            return transaction.purchaseDate >= from && transaction.purchaseDate <= to;
                        });
                        res.json(filtered);
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        res.status(500).send('unable to process request');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getAllTransactions = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var transactions, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, transaction_model_1.default.find()];
                    case 1:
                        transactions = _a.sent();
                        res.json(transactions);
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        res.status(500).send('unable to process request');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.initRoutes();
    }
    TransactionController.prototype.initRoutes = function () {
        this.router.get(this.path, this.getAllTransactions);
        this.router.get(this.path + "/:from.:to", this.getTransactionsByDate);
        this.router.post(this.path, this.uploadTransactions);
    };
    //private functions
    //refactor to.
    TransactionController.prototype.subtractInvoicesToProducts = function (invoices) {
        return __awaiter(this, void 0, void 0, function () {
            var results, _i, invoices_1, invoice, productQty, productFinder, retrieveProduct, retProdId, newQty, updatedQty, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        results = [];
                        _i = 0, invoices_1 = invoices;
                        _a.label = 1;
                    case 1:
                        if (!(_i < invoices_1.length)) return [3 /*break*/, 8];
                        invoice = invoices_1[_i];
                        productQty = invoice.quantity;
                        productFinder = {};
                        productFinder['productId'] = invoice.productId;
                        return [4 /*yield*/, product_model_1.default.find(productFinder)];
                    case 2:
                        retrieveProduct = _a.sent();
                        console.log(retrieveProduct);
                        if (!(retrieveProduct.length > 0)) return [3 /*break*/, 5];
                        retProdId = retrieveProduct[0].id;
                        newQty = {};
                        newQty['currentQty'] = retrieveProduct[0].currentQty - productQty;
                        console.log(retProdId + " : " + JSON.stringify(newQty));
                        return [4 /*yield*/, product_model_1.default.findByIdAndUpdate(retProdId, newQty, { new: true })];
                    case 3:
                        updatedQty = _a.sent();
                        return [4 /*yield*/, results.push(updatedQty)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, results.push({ "error": "no product exists" })];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 1];
                    case 8:
                        console.log(results);
                        return [3 /*break*/, 10];
                    case 9:
                        e_4 = _a.sent();
                        console.log('error ' + e_4);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return TransactionController;
}());
exports.TransactionController = TransactionController;
