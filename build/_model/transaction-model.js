"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
//included here.
var InvoiceSchema = new mongoose_1.Schema({
    productId: { type: mongoose_1.SchemaTypes.String, required: true },
    itemName: { type: String, required: true },
    retailPrice: { type: Number, requried: true },
    quantity: { type: Number, requried: true },
    subtotalPrice: { type: Number, requried: true },
});
var TransactionSchema = new mongoose_1.Schema({
    receiptId: { type: String, unique: true, required: true },
    custName: { type: String, required: true },
    invoices: { type: [InvoiceSchema], required: true },
    totalPrice: { type: Number, requried: true },
    cashier: { type: String, required: true },
    purchaseDate: { type: Date, required: true }
});
var TransactionModel = mongoose_1.model('Transaction', TransactionSchema);
exports.default = TransactionModel;
