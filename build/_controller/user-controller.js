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
                // let id:string = req.params.id;
                var name_1 = {}; //dirty ol' javascript (cwl)
                name_1['userId'] = req.params.username;
                user_model_1.default
                    .find(name_1)
                    .then(function (user) {
                    res.json(user);
                }, function (onrejected) {
                    console.log('rejected' + onrejected);
                    res.status(500).send('server unable to handle request');
                });
            }
            else {
                res.status(400).send('invalid username');
            }
        };
        // get user id first by calling getUser.
        this.modifyUser = function (req, res) {
            if (req.body) {
                var id = req.params.id;
                var updatedUser = req.body;
                user_model_1.default
                    .findByIdAndUpdate(id, updatedUser, { new: true })
                    .then(function (user) {
                    res.json(user);
                }, function (onrejected) {
                    console.log('rejected ' + onrejected);
                    res.status(500).send('server unable to handle request');
                });
            }
            else {
                res.status(400).send('invalid data');
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
            createdUser
                .save()
                .then(function (savedUser) {
                res.json(savedUser);
            }, function (onrejected) {
                console.log(onrejected);
                res.status(500).send('server error.');
            });
        };
        this.deleteUser = function (req, res) {
            var id = req.params.id;
            user_model_1.default
                .findByIdAndDelete(id)
                .then(function (success) {
                if (success) {
                    res.status(200).send('user deleted successfully');
                }
                else {
                    res.status(500).send('user not deleted');
                }
            }, function (onrejected) {
                console.log(onrejected);
                res.status(500).send('server rejected request.');
            });
        };
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
