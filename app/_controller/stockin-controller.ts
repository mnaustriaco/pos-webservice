import { IController } from "../_interfaces/IController";
import * as express from 'express';

export class StockInController implements IController {
    path: string = 'stockin';
    router: express.Router = express.Router();
    
    constructor(){
        this.initRoutes();
    }
    
    initRoutes(): void {
        this.router.post(this.path, this.insertStockRecord);
        this.router.get(`/${this.path}/:id`, this.getStockRecordById);
    }

    insertStockRecord = (req: express.Request, res: express.Response) => {
        if(req.body){
            // insert updating mongo db with model.
        } else {
            res.status(400).send();
        }
    }

    getStockRecordById = (req:express.Request, res: express.Response) => {
        console.log('entering here..');
            if(req.params){
                console.log('is checking if having params..');
            if(req.params['id'] === '20137'){

                res.json({
                    "stockId":"20137",
                    "date":"20190521",
                    "products": [
                        {
                            "productId":"12345678",
                            "stockIn": 30,
                            "supplierId":"Nvidia"
                        },
                        {
                            "productId":"87654321",
                            "stockIn": 24,
                            "supplierId":"AMD"
                        }
                    ]
                });
            } else {
                console.log('is no valid id :< ');
                res.status(400).send(`error retrieving id ${req.params['id']}`);
            }
        } else {
            console.log('is here');
            res.status(400).send();
        }
    }

}