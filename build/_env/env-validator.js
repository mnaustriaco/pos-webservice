"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var envalid_1 = require("envalid");
function validateEnv() {
    envalid_1.cleanEnv(process.env, {
        MONGO_PASSWORD: envalid_1.str(),
        MONGO_PATH: envalid_1.str(),
        MONGO_USER: envalid_1.str(),
        MONGO_PORT: envalid_1.port(),
        MONGO_DB: envalid_1.str(),
        OOS_MIN: envalid_1.num()
    });
}
exports.default = validateEnv;
