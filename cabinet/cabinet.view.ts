namespace $.$$ {

	export class $hyoo_intern_cabinet extends $.$hyoo_intern_cabinet {

		@ $mol_mem
		Spread() {
			if ( !this.spread() ) this.spread( Object.keys(this.spreads())[0] )
			return { user: this.Person_page(), ...this.spreads() }[ this.spread() ]!
		}

		uri( spread: string ) {
			return this.$.$mol_state_arg.make_link( this.arg( spread ) )
		}

	}

}
