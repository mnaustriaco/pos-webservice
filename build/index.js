"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_app_1 = __importDefault(require("./main-app"));
var user_controller_1 = require("./_controller/user-controller");
var app = new main_app_1.default([
    new user_controller_1.UserController()
], 8080);
app.listen();
