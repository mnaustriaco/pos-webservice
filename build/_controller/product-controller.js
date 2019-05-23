"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productController = express_1.Router();
productController.get('/products', function (req, res) {
    //dummy data. format same 
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
});
exports.ProductController = productController;
