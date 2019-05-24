import express = require('express');
import MainApp from './main-app';
import { UserController } from './_controller/user-controller';
import { ProductController } from './_controller/product-controller';
import { AccessController } from './_controller/access-controller';


const app = new MainApp([
    new UserController(),
    new ProductController(),
    new AccessController()
], 8080);

app.listen();