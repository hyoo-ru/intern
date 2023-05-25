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
		campaign_id() {
			return '3fjwgu_3kjvar' as $mol_int62_string
		}

		@ $mol_mem
		campaign() {
			return this.yard().world().Fund( $hyoo_intern_campaign ).Item( this.campaign_id() )
		}

		@ $mol_mem
		role(next?: Role) {
			if (this.user().signed() === false) return 'norole'
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
