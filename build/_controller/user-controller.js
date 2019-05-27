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
var user_model_1 = __importDefault(require("../_model/user-model"));
// for future , refactor to async function.
var UserController = /** @class */ (function () {
    function UserController() {
        var _this = this;
        this.path = '/users';
        this.router = express.Router();
        this.getUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var name, user, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = {};
                        name['userId'] = req.params.username;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, user_model_1.default.find(name)];
                    case 2:
                        user = _a.sent();
                        res.json(user);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        res.status(500).send('server unable to handle request');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // get user id first by calling getUser.
        this.modifyUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, updatedUser, updateResult, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        updatedUser = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, user_model_1.default.findByIdAndUpdate(id, updatedUser, { new: true })];
                    case 2:
                        updateResult = _a.sent();
                        res.json(updateResult);
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        res.status(500).send('server unable to handle request');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        //functions
        this.getAllUsers = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var retrieved, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, user_model_1.default.find()];
                    case 1:
                        retrieved = _a.sent();
                        res.json(retrieved);
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        res.status(500).send("server error \n " + e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.addUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userData, createdUser, createResult, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userData = req.body;
                        createdUser = new user_model_1.default(userData);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, createdUser.save()];
                    case 2:
                        createResult = _a.sent();
                        res.json(createResult);
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        res.status(500).send('server error');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        //refactor to na para username lang yung need ipasa.
        this.deleteUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, deleteResult, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, user_model_1.default.findByIdAndDelete(id)];
                    case 2:
                        deleteResult = _a.sent();
                        res.json(deleteResult);
                        return [3 /*break*/, 4];
                    case 3:
                        e_5 = _a.sent();
                        res.status(500).send('server rejected request.');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.initRoutes();
    }
    UserController.prototype.initRoutes = function () {
        this.router.get(this.path, this.getAllUsers);
        this.router.get(this.path + "/:username", this.getUser);
        this.router.post(this.path, this.addUser);
        this.router.patch(this.path + "/:id", this.modifyUser);
        this.router.delete(this.path + "/:id", this.deleteUser);
    };
    return UserController;
}());
exports.UserController = UserController;
