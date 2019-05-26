"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
//pinagsama ko here cos property naman siya ni Access Control.
var accessSchema = new mongoose_1.Schema({
    access: { type: String, required: true }
});
var accessControlSchema = new mongoose_1.Schema({
    accType: { type: String, unique: true, required: true },
    accList: { type: [accessSchema], required: true }
});
var accControlModel = mongoose_1.model('Access', accessControlSchema);
exports.default = accControlModel;
