import express = require('express');
import MainApp from './main-app';
import validateEnv from './_env/env-validator';
import { UserController } from './_controller/user-controller';
import { ProductController } from './_controller/product-controller';
import { AccessController } from './_controller/access-controller';
import { SupplierController } from './_controller/supplier-controller';
import { StockInController } from './_controller/stockin-controller';
import { TimeCardController } from './_controller/timecard-controller';
import { TransactionController } from './_controller/transaction-controller';


validateEnv();

const app = new MainApp([
    new UserController(),
    new ProductController(),
    new AccessController(),
    new SupplierController(),
    new StockInController(),
    new TimeCardController(),
    new TransactionController()
], 8080);

app.listen();