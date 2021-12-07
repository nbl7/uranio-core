/**
 * Default Class for Business Logic Layer
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

import {bll_book} from 'uranio-books/bll';

// import {Book} from '../typ/book_srv';

import {AtomName} from '../typ/atom';

import {Passport} from '../typ/auth';

import {BLL} from './bll';

import * as book from '../book/';

export type BLLInstance = InstanceType<typeof BLL>;

export function create<A extends AtomName>(atom_name:A, passport?:Passport)
		:CustomBLL<A>{
	urn_log.fn_debug(`Create BLL [${atom_name}]`);
	
	const bll_def = book.bll.get_definition(atom_name);
	if(bll_def && typeof bll_def.class === 'function'){
		return bll_def.class(passport) as CustomBLL<A>;
	}else{
		return new BLL<A>(atom_name, passport) as CustomBLL<A>;
	}
	
	// const atom_def = bll_book[atom_name] as Partial<Book.Definition<A>>;
	// if(
	//   'bll' in atom_def &&
	//   atom_def.bll &&
	//   typeof atom_def.bll === 'function'
	// ){
	//   return atom_def.bll(passport) as CustomBLL<A>;
	// }else{
	//   return new BLL<A>(atom_name, passport) as CustomBLL<A>;
	// }
	
	// if(
	//   'bll' in atom_def &&
	//   atom_def.bll &&
	//   typeof atom_def.bll === 'function' &&
	//   atom_def.bll().prototype &&
	//   atom_def.bll().prototype.constructor.name === 'BLL'
	// ){
	//   return new (atom_def.bll())(passport) as CustomBLL<A>;
	// }else{
	//   return new BLL<A>(atom_name, passport) as CustomBLL<A>;
	// }
}

type BllReturnType<T, A extends AtomName> = T extends (...args:any) => BLL<A> ?
	ReturnType<T> : BLL<A>;

type CustomBLL<A extends AtomName> =
	A extends keyof typeof bll_book ?
	'bll' extends keyof typeof bll_book[A] ?
	BllReturnType<typeof bll_book[A]['bll'], A> :
	BLL<A> :
	BLL<A>;

// export type CustomBLL<A extends AtomName> =
//   A extends keyof typeof bll_book ?
//   'bll' extends keyof typeof bll_book[A] ?
//   typeof bll_book[A]['bll'] extends BLL<A> ?
//   typeof bll_book[A]['bll'] :
//   BLL<A> :
//   BLL<A> :
//   BLL<A>;


