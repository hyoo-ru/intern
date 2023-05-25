namespace $.$$ {

	type Role = keyof ReturnType<$hyoo_intern["cabinets"]>

	export class $hyoo_intern extends $.$hyoo_intern {

		@ $mol_mem
		home() {
			return this.yard().world().home()
		}

		@ $mol_mem
		user() {
			return this.home().chief.yoke( '$hyoo_intern' , $hyoo_intern_person )!
		}

		@ $mol_mem
		role(next?: Role) {
			if (this.user().registered() === false) return 'norole'
			if ( next !== undefined ) {
				return next
			}
			return super.role() as Role
		}

		sub() {
			// return [ this.cabinets()[ this.role() ] ]
			return [ this.Demo(), this.cabinets()[ this.role() ] ]
		}

	}

}
