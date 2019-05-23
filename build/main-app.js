"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import * as express from 'express';
var MainApp = /** @class */ (function () {
    function MainApp(controllers, port) {
        this.mainApp = express();
        this.port = port;
        this.initMiddlewares();
        this.initControllers(controllers);
    }
    MainApp.prototype.initMiddlewares = function () {
        this.mainApp.use(this.loggerMiddleware);
    };
    MainApp.prototype.initControllers = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this.mainApp.use('/', controller.router);
        });
    };
    MainApp.prototype.listen = function () {
        var _this = this;
        this.mainApp.listen(this.port, function () {
            console.log("Now listenning to port :  " + _this.port);
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
