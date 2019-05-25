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
var user_model_1 = __importDefault(require("../_model/user-model"));
var UserController = /** @class */ (function () {
    function UserController() {
        this.path = '/users';
        this.router = express.Router();
        this.getUser = function (req, res) {
            if (req.params.username) {
                var username = req.params.username;
                user_model_1.default
                    .findById(username)
                    .then(function (user) {
                    res.send(user);
                }, function (onrejected) {
                    console.log('rejected' + onrejected);
                    res.status(500).send('server unable to handle response');
                });
            }
            else {
                res.status(400).send('invalid username');
            }
        };
        //functions
        this.getAllUsers = function (req, res) {
            user_model_1.default
                .find()
                .then(function (users) {
                res.json(users);
            });
        };
        this.addUser = function (req, res) {
            var userData = req.body;
            // res.json({});
            var createdUser = new user_model_1.default(userData);
            console.log(createdUser);
            createdUser.save().then(function (savedUser) {
                res.json(savedUser);
            });
        };
        this.initRoutes();
    }
    UserController.prototype.initRoutes = function () {
        this.router.get(this.path, this.getAllUsers);
        this.router.post(this.path, this.addUser);
        this.router.get(this.path + "/:username", this.getUser);
    };
    return UserController;
}());
exports.UserController = UserController;
