"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
//included here.
var InvoiceSchema = new mongoose_1.Schema({
    itemName: String,
    retailPrice: Number,
    quantity: Number,
    subtotalPrice: Number
});
var TransactionSchema = new mongoose_1.Schema({
    receiptId: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    invoice: { type: [InvoiceSchema], required: true },
    totalPrice: { type: Number, requried: true },
    cashier: { type: String, required: true },
    purchaseDate: { type: Date, required: true }
});
var TransactionModel = mongoose_1.model('Transaction', TransactionSchema);
exports.default = TransactionModel;
