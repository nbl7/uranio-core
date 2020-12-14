/**
 * Index module for URANIO Core
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

import {generate_mongoose_schema} from './rel/mongo/schema';

const ms = generate_mongoose_schema('superuser');
console.log(ms);

urn_log.defaults.log_level = urn_log.LogLevel.FUNCTION_DEBUG;

import * as urn_core from './main';

export default urn_core;

const superuser_bll = urn_core.bll.create('superuser');

// superuser_bll.find({}).then(function(data){
//   console.log(data);
// });

superuser_bll.save_one({email: 'adjdd@a.com', password: 'sadkjsklad'}).then(function(data){
	console.log(data);
});

