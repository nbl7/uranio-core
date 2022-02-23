"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Web run module
 *
 * @packageDocumentation
 */
const urn_lib_1 = require("urn-lib");
urn_lib_1.urn_log.init(urn_lib_1.urn_log.LogLevel.FUNCTION_DEBUG);
const server_1 = __importDefault(require("./server"));
server_1.default.init();
// console.log(urn_core);
// import client from './client';
// console.log(urn_core);
// console.log(client.schema.PropertyType.EMAIL);
// const bll_log = urn_core.bll.create_basic('log');
// const bll_log = urn_core.bll.create_log('debug');
// const log = {
//   active: true,
//   msg: 'First log',
//   type: 'debug'
// };
// bll_log.insert_new(log).then((d) => console.log(d));
// bll_log.find({}).then((d) => console.log(d));
const bll_users = server_1.default.bll.basic.create('user');
bll_users.find({}).then((data) => {
    console.log(data);
});
//# sourceMappingURL=dev.js.map