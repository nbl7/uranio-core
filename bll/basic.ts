/**
 * Class for Basic Business Logic Layer
 *
 * It is a mirror of a Data Access Layer.
 * The method _get_access_layer can be overwritten when extending the class.
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

import * as urn_dal from '../dal/';

import {
	AtomName,
	Atom,
	AtomShape,
	Depth,
	Molecule,
} from '../typ/atom';

import {AuthAction} from '../typ/auth';

import {AccessLayer} from '../typ/layer';

import {Query} from '../typ/query';

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
export class BasicBLL<A extends AtomName> {
	
	protected _al:AccessLayer<A>;
	
	constructor(public atom_name:A, init_access_layer?:() => AccessLayer<A>){
		if(!init_access_layer){
			this._al = urn_dal.create(atom_name);
		}else{
			this._al = init_access_layer();
		}
	}
	
	public async find<D extends Depth>(query:Query<A>, options?:Query.Options<A,D>)
			:Promise<Molecule<A,D>[]>{
		return await this._al.select(query, options);
	}
	
	public async find_by_id<D extends Depth>(id:string, options?:Query.Options<A,D>)
			:Promise<Molecule<A,D>>{
		return await this._al.select_by_id(id, options);
	}
	
	public async find_one<D extends Depth>(query:Query<A>, options?:Query.Options<A,D>)
			:Promise<Molecule<A,D>>{
		return await this._al.select_one(query, options);
	}
	
	public async count(query:Query<A>)
			:Promise<number>{
		return await this._al.count(query);
	}
	
	public async insert_new(atom_shape:AtomShape<A>)
			:Promise<Atom<A>>{
		return await this._al.insert_one(atom_shape);
	}
	
	public async update_by_id(id:string, partial_atom:Partial<AtomShape<A>>)
			:Promise<Atom<A>>{
		return await this._al.alter_by_id(id, partial_atom);
	}
	
	public async update_one(atom:Atom<A>)
			:Promise<Atom<A>>{
		return await this.update_by_id(atom._id, atom as Partial<AtomShape<A>>);
	}
	
	public async remove_by_id(id:string)
			:Promise<Atom<A>>{
		return await this._al.delete_by_id(id);
	}
	
	public async remove_one<D extends Depth>(molecule:Molecule<A,D>)
			:Promise<Atom<A>>{
		return await this.remove_by_id(molecule._id);
	}
	
	public async authorize(action:AuthAction, id?:string)
			:Promise<true>{
		return await this._al.authorize(action, id);
	}
	
	public async find_multiple<D extends Depth>(ids:string[], options?:Query.Options<A,D>)
			:Promise<Molecule<A,D>[]>{
		return await this._al.select({_id: {$in: ids}} as Query<A>, options);
	}
	
	// public async find_multiple<D extends Depth>(ids:string[], options?:Query.Options<A,D>)
	//     :Promise<Molecule<A,D>[]>{
	//   return await this._al.select_multiple(ids, options);
	// }
	
	public async update_multiple(ids:string[], partial_atom:Partial<AtomShape<A>>)
			:Promise<Atom<A>[]>{
		return await this._al.alter_multiple(ids, partial_atom);
	}
	
	public async insert_multiple(atom_shapes:AtomShape<A>[])
			:Promise<Atom<A>[]>{
		return await this._al.insert_multiple(atom_shapes);
	}
	
	public async remove_multiple(ids:string[])
			:Promise<Atom<A>[]>{
		return await this._al.delete_multiple(ids);
	}
	
}

export function create<A extends AtomName>(atom_name:A)
		:BasicBLL<A>{
	urn_log.fn_debug(`Create BasicBLL [${atom_name}]`);
	return new BasicBLL<A>(atom_name);
}



