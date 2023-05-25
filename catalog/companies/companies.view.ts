namespace $.$$ {

	export class $hyoo_intern_catalog_companies extends $.$hyoo_intern_catalog_companies {

		@ $mol_mem
		companies() {
			return this.ids().map( id=> this.company(id) )
		}

		menu_body(): readonly any[] {
			return this.filter_opened()?
				[ this.Filter_form() ] : 
				super.menu_body()
		}

		menu_foot(){
			switch (this.access()) {
				case 'mod':
					return super.menu_foot()
				default:
					return [ ]
			}
		}

		page_content( id: any ) {
			switch (this.access()) {
				case 'mod':
					return [ this.Page_content_mod(id) ]
				default:
					return [ this.Page_content_read(id) ]
			}
			
		}

	}

}
