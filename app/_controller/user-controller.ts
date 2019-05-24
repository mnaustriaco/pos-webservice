import { IController } from "../_interfaces/IController";
import * as express from 'express';

export class UserController implements IController {
    path: string = '/users';  
    router: express.Router = express.Router();

    constructor(){
        this.initRoutes();
    }
    initRoutes(): void{
        this.router.get(this.path, this.getAllUsers);
        
    }

    //functions
    getAllUsers = (req: express.Request, res: express.Response) => {
        res.send([{
            "user":"mario",
            "password":"sekyu",
            "access":"user"
        },{
            "user":"nino",
            "password":"kyusei",
            "access":"admin"
        }]);
    }

}