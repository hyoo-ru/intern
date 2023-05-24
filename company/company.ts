namespace $ {

	export class $hyoo_intern_company extends $hyoo_crowd_struct {

		@ $mol_mem
		name( next?: string ) {
			return this.sub( 'name', $hyoo_crowd_reg ).str( next ) ?? ''
		}

	}

}
