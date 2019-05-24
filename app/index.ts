import express = require('express');
import MainApp from './main-app';
import { UserController } from './_controller/user-controller';
import { ProductController } from './_controller/product-controller';
import { AccessController } from './_controller/access-controller';
import { SupplierController } from './_controller/supplier-controller';


const app = new MainApp([
    new UserController(),
    new ProductController(),
    new AccessController(),
    new SupplierController()
], 8080);

app.listen();