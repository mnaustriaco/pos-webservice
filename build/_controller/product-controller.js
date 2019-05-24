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
                    "item_name": "GTX 1060",
                    "part_number": "02",
                    "category": "GPU",
                    "description": "A video card with 4 GB Capability",
                    "supplier_price": 1000.00,
                    "wholesale_price": 1100.00,
                    "retail_price": 1200.00,
                    "current_qty": 15,
                    "stock_qty": 30,
                    "supplier_id": "Nvidia",
                    "product_image": "gtx.jpg"
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
