/**
 * Main module for server
 *
 * @packageDocumentation
 */

import * as types from './types';

export {types};


import * as bll from '../bll/';

export {bll};


import * as atm from '../atm/';

export {atm};


import * as stc from '../stc/';

export {stc};


export * from '../dsc/';


import {core_config} from '../conf/defaults';

export function init(config:types.Configuration)
		:void{
	Object.assign(core_config, config);
}
