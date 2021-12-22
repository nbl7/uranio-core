/**
 * Layer interfaces types module
 *
 * @packageDocumentation
 */

import {AtomName, Depth, Molecule, Atom, AtomShape} from './atom';

import {Query} from './query';

import {AuthAction} from './auth';

export interface AccessLayer<A extends AtomName> {
	
	select<D extends Depth>(query:Query<A>, options?:Query.Options<A,D>):Promise<Molecule<A,D>[]>
	
	select_by_id<D extends Depth>(id:string, options?:Query.Options<A,D>):Promise<Molecule<A,D>>
	
	select_one<D extends Depth>(query:Query<A>, options?:Query.Options<A,D>):Promise<Molecule<A,D>>
	
	count(query:Query<A>):Promise<number>
	
	insert_one(atom_shape:AtomShape<A>):Promise<Atom<A>>
	
	alter_by_id(id:string, partial_atom:Partial<AtomShape<A>>):Promise<Atom<A>>
	
	delete_by_id(id:string):Promise<Atom<A>>
	
	authorize(action:AuthAction, id?:string):Promise<true>
	
}
