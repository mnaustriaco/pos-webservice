// import * as mongoose from 'mongoose';

//para di maimport lahat. kindly replaced every imported objects with mongoose.<object here> 
// kung di gumana. :))

import { model, Document, Schema, SchemaTypes} from 'mongoose';
import { IUser } from '../_interfaces/IUser';

const UserSchema = new Schema({
    userId: {type: SchemaTypes.String, unique: true, required:true},
    password: {type:String, required: true},
    accType: {type:String, required: true}
});

const UserModel = model<IUser & Document>('User', UserSchema);

export default UserModel;