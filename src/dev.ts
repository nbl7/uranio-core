/**
 * Web run module
 *
 * @packageDocumentation
 */
import {urn_log} from 'urn-lib';
urn_log.init(urn_log.LogLevel.FUNCTION_DEBUG);

import uranio from './index';
uranio.init();

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

const bll_users = uranio.bll.basic.create('user');
bll_users.find({}).then((data) => {
	console.log(data);
});
