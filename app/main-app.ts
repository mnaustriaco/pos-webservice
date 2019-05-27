import express = require("express");
import { IController } from "./_interfaces/IController";
import mongoose = require( 'mongoose');
require('dotenv').config();
// import * as express from 'express';


class MainApp {
    public mainApp: express.Application;
    public port: number;

    constructor(controllers:IController[], port:number){
        this.mainApp = express();
        this.port = port;
        this.connectToDb();
        this.initMiddlewares(); 
        this.initControllers(controllers);       


    }

    public listen(){
        this.mainApp.listen(this.port, () => {
            console.log(`Now listenning to port :  ${this.port}`);
        });
    }
    private connectToDb(){
        const {
            MONGO_DB,
            MONGO_PATH,
            MONGO_PORT
        } = process.env;

        console.log('connecting to Database...');
        let connStr = `${MONGO_PATH}:${MONGO_PORT}/${MONGO_DB}`;
        mongoose.connect(`mongodb://${connStr}`, {useNewUrlParser:true});

        mongoose.connection.on('error', (error)=> {
            console.log(`error occured \n ${error}`);
        });
        mongoose.connection.once('open', () => {
                console.log('Is open mother fuckers..');
        })
    }

    private initMiddlewares(){
        this.mainApp.use(express.json());
        this.mainApp.use(this.loggerMiddleware);
    }
    private initControllers(controllers: IController[]){
        controllers.forEach( (controller) => {
            console.log('deploying controller :' + controller.path);
            this.mainApp.use('/', controller.router);
        });

    }

    loggerMiddleware(request: express.Request, response: express.Response, next:express.NextFunction){
        console.log(`> ${request.method} + ${request.path}`)
        next();
    }


}
// idk wat dis.
export default MainApp;

