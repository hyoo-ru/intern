namespace $.$$ {

	type Role = keyof ReturnType<$hyoo_intern["cabinets"]>

	export class $hyoo_intern extends $.$hyoo_intern {

		@ $mol_mem
		home() {
			return this.yard().world().home()
		}

		@ $mol_mem
		peer_id() {
			return this.home().id()
		}

		@ $mol_mem
		user_id(): $mol_int62_string {
			const user_id = this.home().chief.sub( '$hyoo_intern' , $hyoo_crowd_reg ).str( )
			if (user_id) return $mol_int62_string_ensure(user_id)!
			const user = this.yard().world().Fund( $hyoo_intern_person ).make( )
			return $mol_int62_string_ensure( this.home().chief.sub( '$hyoo_intern' , $hyoo_crowd_reg ).str( user.land.id() ) )!
		}

		@ $mol_mem
		user() {
			const user = this.yard().world().Fund( $hyoo_intern_person ).Item( this.user_id() )
			user.peer_id( this.peer_id() )
			return user
		}
		
		@ $mol_mem
		campaign_id(next?: $mol_int62_string) {
			if ( next !== undefined ) return next
			return 'ylvzx5_v2crsx' as $mol_int62_string
		}

		@ $mol_mem
		campaign_owner_peer_id() {
			const campaign_owner = this.campaign().owner()
			const campaign_owner_peer_id = campaign_owner?.peer_id()
			if ( $mol_int62_string_ensure(campaign_owner_peer_id) ) {
				this.user().land.level( $mol_int62_string_ensure(campaign_owner_peer_id)! , $hyoo_crowd_peer_level.law )
			}
			return campaign_owner_peer_id || 'unknown'
		}

		@ $mol_mem
		campaign() {
			return this.yard().world().Fund( $hyoo_intern_campaign ).Item( this.campaign_id() )
		}

		@ $mol_action
		add_campaign() {
			const campaign = this.yard().world().Fund( $hyoo_intern_campaign ).make()
			campaign.owner( this.user() )
			campaign.candidates_on_review().land.level( '0_0' , $hyoo_crowd_peer_level.add )
			this.campaign_id( campaign.id() )
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
