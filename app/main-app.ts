import express = require("express");
import { IController } from "./_interfaces/IController";

// import * as express from 'express';

class MainApp {
    public mainApp: express.Application;
    public port: number;

    constructor(controllers:IController[], port:number){
        this.mainApp = express();
        this.port = port;

        this.initMiddlewares(); 
        this.initControllers(controllers);       

    }
   
    private initMiddlewares(){
        this.mainApp.use(this.loggerMiddleware);
    }
    private initControllers(controllers: IController[]){
        controllers.forEach( (controller) => {
            this.mainApp.use('/', controller.router);
        });

    }
    public listen(){
        this.mainApp.listen(this.port, () => {
            console.log(`Now listenning to port :  ${this.port}`);
        });
    }

    loggerMiddleware(request: express.Request, response: express.Response, next:express.NextFunction){
        console.log(`> ${request.method} + ${request.path}`)
        next();
    }
}
// idk wat dis.
export default MainApp;

