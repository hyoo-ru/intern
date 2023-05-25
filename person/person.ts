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
		signed(next?: boolean) {
			return this.sub( 'signed', $hyoo_crowd_reg ).bool( next ) ?? false
		}

		@ $mol_mem
		campaigns() {
			const node = this.sub('campaigns', $hyoo_intern_entity_links<typeof $hyoo_intern_campaign>)
			node.Item = $hyoo_intern_campaign
			return node
		}

	}

}
