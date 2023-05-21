namespace $.$$ {

	type Role = 'norole' | 'applicant'

	export class $hyoo_intern extends $.$hyoo_intern {

		@ $mol_mem
		register() {
			this.role( 'applicant' )
		}
		
		@ $mol_mem
		spreads() {
			return this.role_spreads()[ this.role() ]
		}

		arg( spread: string ) {
			const is_default = spread === this.default_spreads()[ this.role() ]
			return { [ this.param() ]: is_default? null : spread || null }
		}

		@ $mol_mem
		role(next?: Role) {
			if ( next !== undefined ) {
				this.spread( null )
				return next
			}
			return "norole"
		}

		@ $mol_mem
		pages() {
			const pages = super.pages()
			const default_spread = (this.spreads() as any)[ this.default_spreads()[ this.role() ] ]
			return [
				...pages,
				...( pages.length === 1? [ default_spread ] : [] ),
			]
		}

	}

}
