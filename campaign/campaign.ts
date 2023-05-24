namespace $ {

	export class $hyoo_intern_campaign extends $hyoo_crowd_struct {
		
		@ $mol_mem
		name( next?: string ) {
			return this.sub( 'name', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		owner( next?: $hyoo_intern_person ) {
			const str = this.sub( 'owner' , $hyoo_crowd_reg ).str( next && next.head )
			const id = $mol_int62_string_ensure( str )
			return id ? this.world()?.Fund( $hyoo_intern_person ).Item( id ) : null
		}
		
		@ $mol_mem
		companies_node() {
			return this.sub( 'companies', $hyoo_crowd_list ) 
		}

		@ $mol_mem
		companies() {
			const ids = this.companies_node().list() as string[]
			return ids.map( id => this.company(id) )
		}

		@ $mol_mem_key
		company(id: string){
			const company = this.world()?.Fund( $hyoo_intern_company ).Item( $mol_int62_string_ensure( id )! )
			return company
		}

		@ $mol_action
		company_add() {
			const company = this.world()?.Fund( $hyoo_intern_company ).make()
			this.sub( 'companies', $hyoo_crowd_list ).insert([ company?.id() ])
			return company
		}
		
		@ $mol_action
		company_drop( obj: $hyoo_intern_company ) {
			const index = this.companies().indexOf( obj )
			this.sub( 'companies', $hyoo_crowd_list ).cut( index )
		}

	}
	
}
