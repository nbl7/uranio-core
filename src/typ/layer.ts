/**
 * Layer interfaces types module
 *
 * @packageDocumentation
 */

// import {schema.AtomName, schema.Depth, schema.Molecule, schema.Atom, schema.AtomShape} from './atom';

// import {schema.Query} from './query';

// import schema from 'uranio-schema';

import {schema} from '../sch/index';

import {AuthAction} from './auth';

export interface AccessLayer<A extends schema.AtomName> {
	
	select<D extends schema.Depth>(query:schema.Query<A>, options?:schema.Query.Options<A,D>):Promise<schema.Molecule<A,D>[]>
	
	select_by_id<D extends schema.Depth>(id:string, options?:schema.Query.Options<A,D>):Promise<schema.Molecule<A,D>>
	
	select_one<D extends schema.Depth>(query:schema.Query<A>, options?:schema.Query.Options<A,D>):Promise<schema.Molecule<A,D>>
	
	count(query:schema.Query<A>):Promise<number>
	
	insert_one(atom_shape:schema.AtomShape<A>):Promise<schema.Atom<A>>
	
	alter_by_id(id:string, partial_atom:Partial<schema.AtomShape<A>>):Promise<schema.Atom<A>>
	
	delete_by_id(id:string):Promise<schema.Atom<A>>
	
	authorize(action:AuthAction, id?:string):Promise<true>
	
	// select_multiple<D extends schema.Depth>(ids:string[], options?:schema.Query.Options<A,D>):Promise<schema.Molecule<A,D>[]>
	
	alter_multiple(ids:string[], partial_atom:Partial<schema.AtomShape<A>>):Promise<schema.Atom<A>[]>
	
	insert_multiple(atom_shapes:schema.AtomShape<A>[]):Promise<schema.Atom<A>[]>
	
	delete_multiple(ids:string[]):Promise<schema.Atom<A>[]>
	
}
