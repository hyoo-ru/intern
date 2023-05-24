namespace $ {

	export class $hyoo_intern_person extends $hyoo_crowd_struct {

		@ $mol_mem
		name( next?: string ) {
			return this.sub( 'name', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		name_family( next?: string ) {
			return this.sub( 'name_family', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		email( next?: string ) {
			return this.sub( 'email', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		registered(next?: boolean) {
			return this.sub( 'registered', $hyoo_crowd_reg ).bool( next ) ?? false
		}
	}

}
