"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var accessControlSchema = new mongoose_1.Schema({
    accType: { type: mongoose_1.SchemaTypes.String, unique: true, required: true },
    accList: { type: [String], required: true }
});
var accControlModel = mongoose_1.model('Access', accessControlSchema);
exports.default = accControlModel;
