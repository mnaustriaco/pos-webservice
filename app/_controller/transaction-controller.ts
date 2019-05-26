import { IController } from "../_interfaces/IController";
import * as express from 'express';

import ProductModel from '../_model/product-model';
import TransactionModel from '../_model/transaction-model';
import { ITransaction } from "../_interfaces/ITransaction";
import { IInvoice } from "../_interfaces/IInvoice";

//we are using product model coz we gonna update it. get it get it?
export class TransactionController implements IController {
    path: string = '/transactions';
    router: express.Router = express.Router();

    constructor() {
        this.initRoutes();
    }

    initRoutes(): void {
        this.router.get(this.path, this.getAllTransactions);
        this.router.get(`${this.path}/:from-:to`, this.getTransactionsByDate);
        this.router.post(this.path, this.uploadTransactions);
    }

    uploadTransactions = async (req: express.Request, res: express.Response) => {
        let transaction: ITransaction = req.body;
        try {
           await this.subtractInvoicesToProducts(transaction.invoices);
            let uploadTxn = new TransactionModel(transaction);
            let uploadResult = await uploadTxn.save();
            res.json(uploadResult);
        } catch (e) {
            res.status(500).send('unable to send to db\n' + e);
        }

    }

    getTransactionsByDate = (req: express.Request, res: express.Response) => {

    }
    getAllTransactions = async (req: express.Request, res: express.Response) => {
        try {
            let transactions = await TransactionModel.find();
            res.json(transactions);
        } catch (e) {
            res.status(500).send('unable to process request');
        }
    }
    //private functions
    //refactor to.
    private async subtractInvoicesToProducts(invoices: IInvoice[]) {
        try {
            let results: any = [];
            invoices.forEach(async invoice => {
                
                // TODO here.
                //get quantity.
                let productQty = invoice.quantity;

                //find the product.
                let productFinder: any = {};
                productFinder['productId'] = invoice.productId;
                // await ProductModel.init();
                let retrieveProduct = await ProductModel.find(productFinder);
                console.log(retrieveProduct);
                //update product quantity.
                if (retrieveProduct.length > 0) {
                    let retProdId = retrieveProduct[0].id;
                    let newQty: any = {};
                    newQty['currentQty'] = retrieveProduct[0].currentQty - productQty;
                    console.log(`${retProdId} : ${JSON.stringify(newQty)}`);
                    let updatedQty = await ProductModel.findByIdAndUpdate(retProdId, newQty, { new: true });
                    await results.push(updatedQty);
                } else {
                    await results.push({ "error": "no product exists" });
                }
            });
            console.log( results);
        } catch (e) {
            console.log('error ' + e);
        }
    }

}