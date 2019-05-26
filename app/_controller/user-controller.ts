import { IController } from "../_interfaces/IController";
import * as express from 'express';
import UserModel from '../_model/user-model';
import { IUser } from "../_interfaces/IUser";


// for future , refactor to async function.

export class UserController implements IController {
    path: string = '/users';  
    router: express.Router = express.Router();

    constructor(){
        this.initRoutes();
    }
    initRoutes(): void{
        this.router.get(this.path, this.getAllUsers);
        this.router.get(`${this.path}/:username`, this.getUser);
        this.router.post(this.path, this.addUser);
        this.router.patch(`${this.path}/:id`, this.modifyUser);
        this.router.delete(`${this.path}/:id`, this.deleteUser);
    }

    getUser = async (req: express.Request, res: express.Response)=> {
        let name: any = {}; 
        name['userId'] = req.params.username;
        try {
            let user = await UserModel.find(name);
            res.json(user);
        } catch (e) {
            res.status(500).send('server unable to handle request');
        }
    }

    // get user id first by calling getUser.
    modifyUser = async (req: express.Request, res: express.Response) => {
        let id = req.params.id;
        let updatedUser = req.body;
        try {
            let updateResult = await UserModel.findByIdAndUpdate(id, updatedUser, {new: true});
            res.json(updateResult);
        } catch (e) {
            res.status(500).send('server unable to handle request');
        }
    }

    //functions
    getAllUsers = async (req: express.Request, res: express.Response) => {
        try {
            let retrieved = await UserModel.find();
            res.json(retrieved);
        } catch (e ){
            res.status(500).send(`server error \n ${e}`);
        }
    }

    addUser = async (req: express.Request, res: express.Response) => {
        let userData: IUser = req.body;
        let createdUser = new UserModel(userData);
        try {
            let createResult = await createdUser.save();
            res.json(createResult);
        } catch (e) {
            res.status(500).send('server error');
        }
    }

    //refactor to na para username lang yung need ipasa.
    deleteUser = async (req: express.Request, res: express.Response) => {
        

        const id = req.params.id;
        try {
            let deleteResult = await UserModel.findByIdAndDelete(id);
            res.json(deleteResult);
        } catch (e ) {
            res.status(500).send('server rejected request.');
        }
    }

}