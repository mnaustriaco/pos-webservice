"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
require('dotenv').config();
// import * as express from 'express';
var MainApp = /** @class */ (function () {
    function MainApp(controllers, port) {
        this.mainApp = express();
        this.port = port;
        this.connectToDb();
        this.initMiddlewares();
        this.initControllers(controllers);
    }
    MainApp.prototype.listen = function () {
        var _this = this;
        this.mainApp.listen(this.port, function () {
            console.log("Now listenning to port :  " + _this.port);
        });
    };
    MainApp.prototype.connectToDb = function () {
        var _a = process.env, MONGO_DB = _a.MONGO_DB, MONGO_PATH = _a.MONGO_PATH, MONGO_PORT = _a.MONGO_PORT;
        console.log('connecting to Database...');
        var connStr = MONGO_PATH + ":" + MONGO_PORT + "/" + MONGO_DB;
        mongoose.connect("mongodb://" + connStr, { useNewUrlParser: true });
        mongoose.connection.on('error', function (error) {
            console.log("error occured \n " + error);
        });
        mongoose.connection.once('open', function () {
            console.log('Is open mother fuckers..');
        });
    };
    MainApp.prototype.initMiddlewares = function () {
        this.mainApp.use(express.json());
        this.mainApp.use(this.loggerMiddleware);
    };
    MainApp.prototype.initControllers = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            console.log('deploying controller :' + controller.path);
            _this.mainApp.use('/', controller.router);
        });
    };
    MainApp.prototype.loggerMiddleware = function (request, response, next) {
        console.log("> " + request.method + " + " + request.path);
        next();
    };
    return MainApp;
}());
// idk wat dis.
exports.default = MainApp;
