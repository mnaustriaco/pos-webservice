import { IController } from "../_interfaces/IController";
import * as express from 'express';

export class TransactionController implements IController {
    path: string = '/transactions';    
    router: express.Router = express.Router();

    constructor(){
        this.initRoutes;
    }

    initRoutes(): void {
        this.router.post(this.path, this.uploadTransactions);
    }

    uploadTransactions = (req:express.Request, res:express.Response) => {
        if(req.body){
            //parse req.body here to either model or mongoose schema.
        }
    }

    getTransactionsByDate =(req:express.Request, res:express.Response) => {

    }
    getAllTransactions = (req:express.Request, res:express.Response) => {

    }

}