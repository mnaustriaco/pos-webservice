import { IController } from "../_interfaces/IController";
import * as express from 'express';

// import { Request, Response, Router } from 'express';

// const userController: Router = Router();

// userController.get('/persons', (req:Request, res:Response) => {
//     //dummy data. format same 
    // res.json();
// });

// export const UserController:Router = userController;

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
            "access":"User"
        },{
            "user":"nino",
            "password":"kyusei",
            "access":"Admin"
        }]);
    }

}