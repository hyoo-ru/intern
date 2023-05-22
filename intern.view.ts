namespace $.$$ {

	type Role = keyof ReturnType<$hyoo_intern["role_spreads"]>

	export class $hyoo_intern extends $.$hyoo_intern {

		@ $mol_mem
		send_resume() {
			this.role( 'applicant' )
		}

		@ $mol_mem
		accept_invitation() {
			this.role( 'intern' )
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
			return super.role() as Role
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
