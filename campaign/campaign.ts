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
		companies() {
			const node = this.sub('companies', $hyoo_intern_entity_links<typeof $hyoo_intern_company>)
			node.Item = $hyoo_intern_company
			return node
		}
		
		@ $mol_mem
		managers() {
			const node = this.sub('managers', $hyoo_intern_entity_links<typeof $hyoo_intern_manager>)
			node.Item = $hyoo_intern_manager
			return node
		}
		
	}
	
}
