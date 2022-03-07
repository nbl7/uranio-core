"use strict";
/**
 * Init module
 *
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const urn_lib_1 = require("urn-lib");
const config_1 = __importDefault(require("../config"));
const default_conf_1 = require("../client/default_conf");
const required = __importStar(require("../req/server"));
const register = __importStar(require("../reg/server"));
const conf = __importStar(require("../conf/client"));
const env = __importStar(require("../env/client"));
const log = __importStar(require("../log/client"));
function init(config, register_required = true) {
    log.init(urn_lib_1.urn_log.defaults);
    env.set_from_env(default_conf_1.core_client_config);
    conf.set(default_conf_1.core_client_config, config_1.default);
    if (config) {
        conf.set(default_conf_1.core_client_config, config);
    }
    if (register_required) {
        _register_required_atoms();
    }
    conf.set_initialize(true);
    env.set_initialize(true);
    urn_lib_1.urn_log.defaults.log_level = env.get(`log_level`);
}
exports.init = init;
function _register_required_atoms() {
    const required_atoms = required.get();
    for (const [atom_name, atom_def] of Object.entries(required_atoms)) {
        register.atom(atom_def, atom_name);
    }
}
//# sourceMappingURL=client.js.map