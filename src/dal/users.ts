/**
 *
 * Implementation of Users Data Access Layer
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

import {DBType} from '../types';

import {DAL} from './dal';

import * as urn_atms from '../atms/';

@urn_log.decorators.debug_constructor
@urn_log.decorators.debug_methods
class DALUsers extends DAL<urn_atms.models.User, urn_atms.user.UserInstance> {
	
	constructor(db_type:DBType){
		super(db_type, urn_atms.user.module);
	}
	
}

export type DalUsersInstance = InstanceType<typeof DALUsers>;

export default function create(db_type:DBType):DalUsersInstance{
	urn_log.fn_debug(`Create DAL Users`);
	return new DALUsers(db_type);
}



