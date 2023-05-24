namespace $.$$ {

	export class $hyoo_intern_catalog_scroll extends $.$hyoo_intern_catalog_scroll {

		page_title(id: string) {
			if (this.Page_link( id ).current()) {
				new $mol_after_tick( 
					()=> this.Pages().ensure_visible( this.Page(id) ) 
				)
			}
			return id
		}

		id(id: string) {
			return id
		}

		@ $mol_mem
		links() {
			return this.ids().map( id=> this.Row_link(id) )
		}

		@ $mol_mem
		spreads() {
			return this.ids().map( id=> this.Page(id) )
		}

	}

}
