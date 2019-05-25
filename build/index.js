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
var stockin_controller_1 = require("./_controller/stockin-controller");
var timecard_controller_1 = require("./_controller/timecard-controller");
var transaction_controller_1 = require("./_controller/transaction-controller");
var app = new main_app_1.default([
    new user_controller_1.UserController(),
    new product_controller_1.ProductController(),
    new access_controller_1.AccessController(),
    new supplier_controller_1.SupplierController(),
    new stockin_controller_1.StockInController(),
    new timecard_controller_1.TimeCardController(),
    new transaction_controller_1.TransactionController()
], 8080);
app.listen();
