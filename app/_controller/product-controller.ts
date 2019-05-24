// import { Request, Response, Router } from 'express';
import { IController } from '../_interfaces/IController';
import * as express from 'express';

export class ProductController implements IController{
    
    path: string = '/products';
    router: express.Router = express.Router();

    constructor(){
        this.initRoutes();
    }

    initRoutes(): void {
        this.router.get(this.path, this.getAllProducts);
    }
    //all http method for products.
    getAllProducts = (req:express.Request, res:express.Response) => {
        res.json([{
            "pid":"12345678",
            "itemName":"GTX 1060",
            "partNumber":"02",
            "category":"GPU",
            "description":"A video card with 4 GB Capability",
            "supplierPrice": 1000.00,
            "wholesalePrice": 1100.00,
            "retailPrice": 1200.00,
            "currentQty": 15,
            "stockQty": 30,
            "supplierId" : "Nvidia",
            "productImg":"gtx.jpg" 
            }]);
    }
    
}

// const productController: Router = Router();

// productController.get('/products', (req:Request, res:Response) => {
//     //dummy data. format same 
    // res.json();
// });

// export const ProductController:Router = productController;
