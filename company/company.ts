namespace $ {

	export class $hyoo_intern_company extends $hyoo_crowd_struct {
		
		@ $mol_mem
		name( next?: string ) {
			return this.sub( 'name', $hyoo_crowd_reg ).str( next ) ?? ''
		}
		@ $mol_mem
		adress( next?: string ) {
			return this.sub( 'adress', $hyoo_crowd_reg ).str( next ) ?? ''
		}
		@ $mol_mem
		scope( next?: string ) {
			return this.sub( 'scope', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		campaign( next?: $hyoo_intern_campaign ) {
			const str = this.sub( 'campaign' , $hyoo_crowd_reg ).str( next && next.head )
			const id = $mol_int62_string_ensure( str )
			return id ? this.world()?.Fund( $hyoo_intern_campaign ).Item( id ) : null
		}

	}
	
}
