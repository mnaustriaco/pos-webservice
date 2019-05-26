"use strict";
// import * as mongoose from 'mongoose';
Object.defineProperty(exports, "__esModule", { value: true });
//para di maimport lahat. kindly replaced every imported objects with mongoose.<object here> 
// kung di gumana. :))
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    userId: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    accType: { type: String, required: true }
});
var UserModel = mongoose_1.model('User', UserSchema);
exports.default = UserModel;
