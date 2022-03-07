/**
 * Config types module
 *
 * @packageDocumentation
 */

// import {RequiredConfigParams, OptionalConfigParam} from './intra';

export type Database = 'mongo'; // | 'mysql'

export type Storage = 'aws'; // | 'gcloud' | 'localhost'

export type Configuration = {
	
	db: Database
	
	encryption_rounds?: number
	
	max_password_length?: number
	
	max_query_depth_allowed?: 0 | 1 | 2 | 3
	
	storage?: Storage
	
	connect_on_init?: boolean
	
	superuser_create_on_init?: boolean
	
	log: {
		
		debug_info: boolean
		
		color: boolean
		
		time_format: string
		
		max_str_length: number
		
		prefix: string
		
		prefix_type: boolean
		
	}
	
}
