import { IController } from "../_interfaces/IController";
import * as express from 'express';
import userModel from '../_model/user-model';
import { IUser } from "../_interfaces/IUser";

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

    getUser = (req: express.Request, res: express.Response)=> {
        if(req.params.username){
            // let id:string = req.params.id;
            let name: any = {}; //dirty ol' javascript (cwl)
            name['userId'] = req.params.username;
            userModel
            .find(name)
            .then(
                user => {
                    res.json(user);
                },
                (onrejected)=> {
                    console.log('rejected' + onrejected);
                    res.status(500).send('server unable to handle request');
                }
            )

        } else {
            res.status(400).send('invalid username');
        }

    }

    // get user id first by calling getUser.
    modifyUser = (req: express.Request, res: express.Response) => {
        if(req.body){
            let id = req.params.id;
            let updatedUser = req.body;
            userModel
            .findByIdAndUpdate(id, updatedUser, {new:true})
            .then(
                user => {
                    res.json(user);
                },
                (onrejected) => {
                    console.log('rejected ' + onrejected);
                    res.status(500).send('server unable to handle request');
                }
            )

        } else {
            res.status(400).send('invalid data');
        }
    }

    //functions
    getAllUsers = (req: express.Request, res: express.Response) => {
        userModel
        .find()
        .then(users => {
            res.json(users);
        });
    }

    addUser = (req: express.Request, res: express.Response) => {
        const userData: IUser = req.body;
        // res.json({});
        const createdUser = new userModel(userData);
        console.log(createdUser);
        createdUser
        .save()
        .then( 
            savedUser => {
                res.json(savedUser);
            },
            (onrejected) => {
                console.log(onrejected);
                res.status(500).send('server error. user probably exists');
            }
        );
    }

    deleteUser = (req: express.Request, res: express.Response) => {
        const id = req.params.id;
        userModel
        .findByIdAndDelete(id)
        .then(
            success => {
                if(success){
                    res.status(200).send('user deleted successfully');
                } else {
                    res.status(500).send('user not deleted');
                }
            },
            (onrejected) => {
                    console.log(onrejected);
                    res.status(500).send('server rejected request.');
            }
        );
    }

}