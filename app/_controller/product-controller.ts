// import { Request, Response, Router } from 'express';
import { IController } from '../_interfaces/IController';
import * as express from 'express';
import ProductModel from '../_model/product-model';
import { IProduct } from '../_interfaces/IProduct';
require('dotenv').config();


export class ProductController implements IController {

    path: string = '/products';
    router: express.Router = express.Router();

    constructor() {
        this.initRoutes();
    }

    initRoutes(): void {
        this.router.get(this.path, this.getAllProducts);
        this.router.post(this.path, this.addProduct);
        this.router.get(`${this.path}/oos/`, this.getOutOfStock);
        this.router.get(`${this.path}/:pid`, this.getProduct);
        this.router.patch(`${this.path}/:pid`, this.modifyProduct);
        this.router.delete(`${this.path}/:pid`, this.deleteProduct);
    }

    getProduct = async (req: express.Request, res: express.Response) => {
        try {
            let id = req.params.pid;
            let findObj:any = {};
            findObj['productId'] = id;
            let retrievedProducts = await ProductModel.find(findObj);
            res.json(retrievedProducts);
        } catch (e) {
            res.status(500).send(`unable to retrieve product. \n ${e}`);
        }

    }
    //define minimum out of stock sa environments
    getOutOfStock = async (req: express.Request, res: express.Response) => {
        const { OOS_MIN } = process.env;
        try {
            let allProducts = await ProductModel.find();
            let filteredProducts = allProducts.filter(product => {
                console.log(`${product.stockQty} : ${OOS_MIN}`);
                return product.stockQty < +OOS_MIN!;
            })
            res.send(filteredProducts);
        } catch (e) {
            res.send(`Server Error \n ${e}`);
        }

    }
    //batch upload or single upload.
    //experimental si batch.
    addProduct = async (req: express.Request, res: express.Response) => {
        if (Array.isArray(req.body)) {
            try {
                let newProducts: IProduct[] = req.body;
                let saveProducts = new ProductModel(newProducts);
                let savedResults = await saveProducts.collection.insertMany(newProducts);
                res.json(savedResults);
            } catch (e) {
                res.status(500).send(`server error. unable to insert this list \n ${e}`);
            }
        } else {
            try {
                let newProduct: IProduct = req.body;
                let saveProduct = new ProductModel(newProduct);
                let savedResult = await saveProduct.save();
                res.json(savedResult);
            } catch (e) {
                res.status(500).send(`server error. unable to insert this product. ${e}`);
            }

        }


    }

    modifyProduct = async (req: express.Request, res: express.Response) => {
        try {
            let pid = req.params.pid;
            let updated: IProduct = req.body;
            console.log(updated);
            let findObj:any = {};
            findObj['productId'] = pid;
            let retrievedProducts = await ProductModel.find(findObj);
            let id = retrievedProducts[0].id;
            let updateProduct = await ProductModel.findByIdAndUpdate(id, updated, {new:true});
            console.log(`hello : ${updateProduct}`);
            res.json(updateProduct);
        } catch (e) {
            res.status(500).send(`unable to update product. \n ${e}`);
        }
    }

    deleteProduct = async (req: express.Request, res: express.Response) => {
        try {
            let pid = req.params.pid;
            let findObj:any = {};
            findObj['productId'] = pid;
            let retrievedProducts = await ProductModel.find(findObj);
            let id = retrievedProducts[0].id;
            let deleted = await ProductModel.findByIdAndDelete(id);
            console.log(`hello : ${deleted}`);
            res.json(deleted);
        } catch (e) {
            res.status(500).send(`unable to update product. \n ${e}`);
        }
    }

    //all http method for products.
    getAllProducts = async (req: express.Request, res: express.Response) => {
        try {
            let allProducts = await ProductModel.find();
            res.send(allProducts);
        } catch (e) {
            res.send(`Server Error \n ${e}`);
        }
    }

}
