import { model, Document, Schema } from 'mongoose';
import { IProduct } from '../_interfaces/IProduct';

const ProductSchema = new Schema({
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
    supplierId: {type: String, required: true},
    productImg: { type: String, required: true }
})

const ProductModel = model<IProduct & Document>('Products', ProductSchema);

export default ProductModel;