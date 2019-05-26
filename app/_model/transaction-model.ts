import { model, Document, Schema} from 'mongoose';
import { ITransaction } from '../_interfaces/ITransaction';

//included here.
const InvoiceSchema = new Schema({
    itemName : String,
    retailPrice: Number,
    quantity: Number,
    subtotalPrice: Number
});

const TransactionSchema = new Schema({
    receiptId: {type:String, required:true, unique:true},
    customerName: {type:String, required:true},
    invoice: {type:[InvoiceSchema], required: true},
    totalPrice: {type: Number, requried:true},
    cashier: {type:String, required: true},
    purchaseDate: {type:Date, required: true}
});

const TransactionModel = model<ITransaction & Document>('Transaction', TransactionSchema);

export default TransactionModel;