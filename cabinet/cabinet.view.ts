namespace $.$$ {

	export class $hyoo_intern_cabinet extends $.$hyoo_intern_cabinet {

		default_spread_key() {
			for (const key in this.spreads()) {
				return key
			}
			return ''
		}
		
		menu_link_content( spread_key: string ){
			return spread_key === 'profile' ?
				[ this.Profile_card( ) ] : 
				super.menu_link_content( spread_key )
		}

		arg( spread: string ) {
			const is_default = spread === this.default_spread_key()
			return { [ this.param() ]: is_default? null : spread || null }
		}

		@ $mol_mem
		pages() {
			const pages = super.pages()
			const default_spread = (this.spreads() as any)[ this.default_spread_key() ]
			return [
				...pages,
				...( pages.length === 1? [ default_spread ] : [] ),
			]
		}

		spreads() {
			return this.norole_spreads()
		}

	}

}
