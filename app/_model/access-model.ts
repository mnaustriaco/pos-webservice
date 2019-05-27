import { model, Document, Schema, SchemaTypes} from 'mongoose';
import {IAccessControl} from '../_interfaces/IAccessControl';


const accessControlSchema = new Schema ({
    accType: {type: SchemaTypes.String, unique:true, required:true},
    accList: {type: [String] , required: true }
})

const accControlModel = model<IAccessControl & Document>('Access', accessControlSchema);

export default accControlModel;