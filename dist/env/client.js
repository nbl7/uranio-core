"use strict";
/**
 * Env module
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.set_from_env = exports.set_initialize = exports.is_initialized = exports.get = exports.defaults = void 0;
const urn_lib_1 = require("urn-lib");
const urn_exc = urn_lib_1.urn_exception.init('CORE_ENV_CLIENT_MODULE', `Core client environment module`);
const default_env_1 = require("../client/default_env");
Object.defineProperty(exports, "defaults", { enumerable: true, get: function () { return default_env_1.core_client_env; } });
let _is_client_core_initialized = false;
function get(param_name) {
    _check_if_uranio_was_initialized();
    _check_if_param_exists(param_name);
    return default_env_1.core_client_env[param_name];
}
exports.get = get;
function is_initialized() {
    return _is_client_core_initialized;
}
exports.is_initialized = is_initialized;
function set_initialize(is_initialized) {
    _is_client_core_initialized = is_initialized;
}
exports.set_initialize = set_initialize;
function set_from_env(repo_env) {
    const env = _get_env_vars(repo_env);
    _set(repo_env, env);
}
exports.set_from_env = set_from_env;
function _set(repo_env, env) {
    _validate_config_types(repo_env, env);
    for (const [conf_key, conf_value] of Object.entries(env)) {
        repo_env[conf_key] = conf_value;
    }
}
function _check_if_param_exists(param_name) {
    return urn_lib_1.urn_util.object.has_key(default_env_1.core_client_env, param_name);
}
function _check_if_uranio_was_initialized() {
    if (is_initialized() === false) {
        throw urn_exc.create_not_initialized(`NOT_INITIALIZED`, `Uranio was not initialized. Please run \`uranio.init()\` in your main file.`);
    }
}
function _validate_config_types(repo_env, env) {
    for (const [env_key, env_value] of Object.entries(env)) {
        const key = env_key;
        if (typeof env_value !== typeof repo_env[key]) {
            throw urn_exc.create_not_initialized(`INVALID_CLIENT_ENV_VALUE`, `Invalid client env value for \`${env_key}\`. \`${env_key}\` value ` +
                ` must be of type \`${typeof repo_env[key]}\`,` +
                `\`${typeof env_value}\` given.`);
        }
    }
}
function _get_env_vars(repo_env) {
    if (typeof process.env.URN_LOG_LEVEL === 'number'
        || typeof process.env.URN_LOG_LEVEL === 'string'
            && process.env.URN_LOG_LEVEL !== '') {
        repo_env.log_level = Number(process.env.URN_LOG_LEVEL);
    }
    return repo_env;
}
//# sourceMappingURL=client.js.map