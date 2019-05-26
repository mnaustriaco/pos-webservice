import { IController } from "../_interfaces/IController";
import * as express from 'express';

import  accControlModel from '../_model/access-model';
import { IAccessControl } from "../_interfaces/IAccessControl";

export class AccessController implements IController {
    path: string = '/access';
    router: express.Router = express.Router();

    constructor(){
        this.initRoutes();
    }


    initRoutes(): void {
        this.router.get(this.path, this.getAllAccessControl );
        this.router.post(this.path, this.addAccessControl);
        this.router.get(`${this.path}/:accType`, this.getAccessControl);
        this.router.patch(`${this.path}/:accType`, this.modifyAccessControl);
    }

    getAllAccessControl = async (req:express.Request, res:express.Response) => {
        try {
            let foundAccess: IAccessControl[] = await accControlModel.find();
            res.json(foundAccess);
        } catch(e) {
            res.status(500).send(`server error. \n ${e}`);
        }
    }
    getAccessControl = async (req:express.Request, res: express.Response) => {
        let accType = req.params.accType;
        let finder: any= {};
        finder['accType'] = accType;
        try {
            let foundAccess : IAccessControl[] = await accControlModel.find(finder);
            res.json(foundAccess);
        } catch (e) {
            res.status(500).send('internal server error\n' + e);
        }
    }
    addAccessControl = async (req:express.Request, res: express.Response) => {
        let accessControl = req.body;
        const createdAccess = new accControlModel(accessControl);
        try {
            let result: IAccessControl = await createdAccess.save();
            res.json(result);
        } catch(e) {
            res.status(500).send('server refused to save data.\n'+ e);
        }
    }

    modifyAccessControl = async (req:express.Request, res: express.Response) => {
        let finder:any = {};
        finder['accType'] = req.params.accType;
        const updatedAccess = req.body;
        try {
            let idGetter = await accControlModel.find(finder);
            let resultId = idGetter[0].id;
            let updated = await accControlModel.findByIdAndUpdate(resultId, updatedAccess, {new:true});
            res.json(updated);
        } catch (e) {
            res.status(500).send('server refused to save data.\n'+ e);
        }
        // imagine the longiness of this fuckin sheit.
    //     accControlModel
    //     .find(finder)
    //     .then(
    //         success => {
    //             let resultId = success[0].id;
    //             accControlModel
    //             .findByIdAndUpdate(resultId, updatedAccess, {new:true})
    //             .then(
    //                 success => {
    //                     res.json(success);
    //                 }
    //             );

    //         }, (onrejected) => {
    //             res.status(500).send('server refused to save data.\n'+ e);
    //         }
    //     );

    }


}