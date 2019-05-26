import { model, Document, Schema, SchemaTypes } from 'mongoose';
import { ITransaction } from '../_interfaces/ITransaction';

//included here.
const InvoiceSchema = new Schema({
    productId: { type: SchemaTypes.String, required: true},
    itemName: { type: String, required: true },
    retailPrice: { type: Number, requried: true },
    quantity: { type: Number, requried: true },
    subtotalPrice: { type: Number, requried: true },
});

const TransactionSchema = new Schema({
    receiptId: { type: String, unique: true, required: true },
    custName: { type: String, required: true },
    invoices: { type: [InvoiceSchema], required: true },
    totalPrice: { type: Number, requried: true },
    cashier: { type: String, required: true },
    purchaseDate: { type: Date, required: true }
});

const TransactionModel = model<ITransaction & Document>('Transaction', TransactionSchema);

export default TransactionModel;