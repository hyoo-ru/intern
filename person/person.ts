namespace $ {

	export class $hyoo_intern_person extends $hyoo_crowd_struct {

		@ $mol_mem
		name( next?: string ) {
			return this.sub( 'name', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		name_family( next?: string ) {
			return this.sub( 'name_family', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		email( next?: string ) {
			return this.sub( 'email', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		registered(next?: boolean) {
			return this.sub( 'registered', $hyoo_crowd_reg ).bool( next ) ?? false
		}

		@ $mol_mem
		campaigns_node() {
			return this.sub( 'campaigns', $hyoo_crowd_list ) 
		}

		@ $mol_mem
		campaigns() {
			return this.campaigns_node().nodes( $hyoo_intern_campaign )
		}

		@ $mol_action
		campaign_add() {
			this.sub( 'campaigns', $hyoo_crowd_list ).insert([ {} ])
			const obj = this.campaigns().slice( -1 )[0]
			return obj
		}
		
		@ $mol_action
		campaign_drop( obj: $hyoo_intern_campaign ) {
			const index = this.campaigns().indexOf( obj )
			this.sub( 'campaigns', $hyoo_crowd_list ).cut( index )
		}

	}

}
