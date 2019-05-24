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
// import { Request, Response, Router } from 'express';
// const userController: Router = Router();
// userController.get('/persons', (req:Request, res:Response) => {
//     //dummy data. format same 
// res.json();
// });
// export const UserController:Router = userController;
var UserController = /** @class */ (function () {
    function UserController() {
        this.path = '/users';
        this.router = express.Router();
        //functions
        this.getAllUsers = function (req, res) {
            res.send([{
                    "user": "mario",
                    "password": "sekyu",
                    "access": "user"
                }, {
                    "user": "nino",
                    "password": "kyusei",
                    "access": "admin"
                }]);
        };
        this.initRoutes();
    }
    UserController.prototype.initRoutes = function () {
        this.router.get(this.path, this.getAllUsers);
    };
    return UserController;
}());
exports.UserController = UserController;
