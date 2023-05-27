namespace $.$$ {

	export class $hyoo_intern_cabinet_sign extends $.$hyoo_intern_cabinet_sign {

		person_has_camapigns() {
			console.log('items', this.person().campaigns().items().length)
			return this.person().campaigns().items().length > 0
		}

		campaign_add_enabled() {
			return !this.person_has_camapigns()
		}

		@ $mol_mem
		campaign_body() {
			console.log(11, this.person(), this.campaign_current())
			return [
				this.About(),
				... this.person_has_camapigns() ? [ this.Campaign() ] : [ null ],
			]
		}

		@ $mol_action
		campaign_add() {
			this.person().campaigns().item_make()
		}

	}

}
