import { cleanEnv, str, port, num} from 'envalid';


function validateEnv(){
    cleanEnv(process.env, {
        MONGO_PASSWORD: str(),
        MONGO_PATH: str(),
        MONGO_USER: str(),
        MONGO_PORT: port(),
        MONGO_DB: str(),
        OOS_MIN: num()
    })
}

export default validateEnv;