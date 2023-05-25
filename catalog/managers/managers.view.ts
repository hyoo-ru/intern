namespace $.$$ {

	export class $hyoo_intern_catalog_managers extends $.$hyoo_intern_catalog_managers {

		@ $mol_mem
		managers() {
			return this.ids().map( id=> this.manager(id) )
		}

	}

}
