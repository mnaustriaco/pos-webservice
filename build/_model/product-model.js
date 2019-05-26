"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ProductSchema = new mongoose_1.Schema({
    productId: { type: String, required: true, unique: true },
    itemName: { type: String, required: true },
    partNumber: { type: Number, required: true },
    category: { type: String, required: true },
    desc: { type: String, required: true },
    supplierPrice: { type: Number, required: true },
    wholesalePrice: { type: Number, required: true },
    retailPrice: { type: Number, required: true },
    currentQty: { type: Number, required: true },
    stockQty: { type: Number, required: true },
    productImg: { type: String, required: true }
});
var ProductModel = mongoose_1.model('Products', ProductSchema);
exports.default = ProductModel;
