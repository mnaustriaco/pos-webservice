import * as express from 'express';

//interface for Routers.
export interface IController {
    path:string,
    router: express.Router

    initRoutes():void;
}