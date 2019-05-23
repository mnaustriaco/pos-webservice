import express = require('express');
import MainApp from './main-app';
import { UserController } from './_controller/user-controller';


const app = new MainApp([
    new UserController(),
], 8080);

app.listen();