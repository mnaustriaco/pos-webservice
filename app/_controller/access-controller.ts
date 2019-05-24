import { IController } from "../_interfaces/IController";
import * as express from 'express';

export class AccessController implements IController {
    path: string = '/access';
    router: express.Router = express.Router();

    constructor(){
        this.initRoutes();
    }


    initRoutes(): void {
        this.router.get(this.path, this.getAllAccessControl );
    }

    getAllAccessControl = (req:express.Request, res:express.Response) => {
        res.json({
            "accType":"user",
            "accList":["POS","SUP"]
        });

    }


}