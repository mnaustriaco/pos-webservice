"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var ProductController = /** @class */ (function () {
    function ProductController() {
        this.path = '/products';
        this.router = express.Router();
        //all http method for products.
        this.getAllProducts = function (req, res) {
            res.json([{
                    "pid": "12345678",
                    "itemName": "GTX 1060",
                    "partNumber": "02",
                    "category": "GPU",
                    "description": "A video card with 4 GB Capability",
                    "supplierPrice": 1000.00,
                    "wholesalePrice": 1100.00,
                    "retailPrice": 1200.00,
                    "currentQty": 15,
                    "stockQty": 30,
                    "supplierId": "Nvidia",
                    "productImg": "gtx.jpg"
                }]);
        };
        this.initRoutes();
    }
    ProductController.prototype.initRoutes = function () {
        this.router.get(this.path, this.getAllProducts);
    };
    return ProductController;
}());
exports.ProductController = ProductController;
// const productController: Router = Router();
// productController.get('/products', (req:Request, res:Response) => {
//     //dummy data. format same 
// res.json();
// });
// export const ProductController:Router = productController;
