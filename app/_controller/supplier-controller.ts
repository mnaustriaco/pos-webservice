import { IController } from "../_interfaces/IController";
import * as express from 'express';

export class SupplierController implements IController {
    path: string = '/supplier';    
    router: express.Router = express.Router();

    initRoutes(): void {
        this.router.get(this.path, this.getAllSuppliers) ;
    }
    getAllSuppliers = (req:express.Request, res:express.Response) => {
        res.json([{
            "supplierId":"Nvidia",
            "supplierName":"Nvidia Ltd.",
            "contactName":"Juan Dela Cruz",
            "address":"Somewhere",
            "contactNumber": "0917 802 3974",
            "email" : "jdelacruz@nvidia.com"
        }]);
    }


}