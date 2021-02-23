/**
 * Default Class for Business Logic Layer
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

import {AtomName, TokenObject} from '../types';

import {AuthBLL} from './auth';

@urn_log.decorators.debug_constructor
@urn_log.decorators.debug_methods
export class BLL<A extends AtomName> extends AuthBLL<A>{}

// export type BLLInstance = InstanceType<typeof BLL>;

export function create<A extends AtomName>(atom_name:A, token_object?:TokenObject)
		:BLL<A>{
	urn_log.fn_debug(`Create BLL [${atom_name}]`);
	return new BLL<A>(atom_name, token_object);
}



