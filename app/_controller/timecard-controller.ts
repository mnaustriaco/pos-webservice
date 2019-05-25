import { IController } from "../_interfaces/IController";
import * as express from 'express';

export class TimeCardController implements IController {
    path: string = '/timecard';    
    router: express.Router =  express.Router();
    
    constructor(){
        this.initRoutes();
    }

    initRoutes(): void {
        this.router.post(this.path, this.uploadTimecard);
    }

    uploadTimecard = (req: express.Request, res: express.Response) => {
        if(req.body){
            // add post here.
        }
    }




}