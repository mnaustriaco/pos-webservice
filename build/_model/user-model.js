"use strict";
// import * as mongoose from 'mongoose';
Object.defineProperty(exports, "__esModule", { value: true });
//para di maimport lahat. kindly replaced every imported objects with mongoose.<object here> 
// kung di gumana. :))
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    userId: String,
    password: String,
    accType: String
});
var userModel = mongoose_1.model('User', userSchema);
exports.default = userModel;
