"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_app_1 = __importDefault(require("./main-app"));
var user_controller_1 = require("./_controller/user-controller");
var product_controller_1 = require("./_controller/product-controller");
var access_controller_1 = require("./_controller/access-controller");
var supplier_controller_1 = require("./_controller/supplier-controller");
var app = new main_app_1.default([
    new user_controller_1.UserController(),
    new product_controller_1.ProductController(),
    new access_controller_1.AccessController(),
    new supplier_controller_1.SupplierController()
], 8080);
app.listen();
