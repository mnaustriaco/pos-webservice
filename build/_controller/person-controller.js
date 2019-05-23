"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController = express_1.Router();
userController.get('/persons', function (req, res) {
    //dummy data. format same 
    res.json([{
            "user": "mario",
            "password": "sekyu",
            "access": "User"
        }, {
            "user": "nino",
            "password": "kyusei",
            "access": "Admin"
        }]);
});
exports.UserController = userController;
