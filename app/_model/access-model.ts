import { model, Document, Schema} from 'mongoose';
import {IAccessControl} from '../_interfaces/IAccessControl';


//pinagsama ko here cos property naman siya ni Access Control.
const accessSchema = new Schema({

})

const accessControlSchema = new Schema ({
    accType: {type: String, unique:true, required:true},
    accList: {type: , }
})