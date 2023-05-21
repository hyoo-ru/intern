namespace $.$$ {

	type Role = 'norole' | 'applicant'

	export class $hyoo_intern extends $.$hyoo_intern {

		@ $mol_mem
		register() {
			this.role( 'applicant' )
		}
		
		@ $mol_mem
		spreads() {
			return this.role_spreads()[ this.role() as Role ]
		}

	}

}
