namespace $.$$ {

	type Role = keyof ReturnType<$hyoo_intern["cabinets"]>

	export class $hyoo_intern extends $.$hyoo_intern {

		@ $mol_mem
		home() {
			return this.yard().world().home()
		}

		@ $mol_mem
		user() {
			return this.home().chief.as( $hyoo_intern_person )
		}

		@ $mol_mem
		campaign_arg() {
			const str = this.$.$mol_state_arg.value('campaign')
			const id = $mol_int62_string_ensure( str )
			return id ? this.home().world()?.Fund( $hyoo_intern_campaign ).Item(id) : null
		}

		@ $mol_mem
		role() {
			if (!this.campaign_arg()) {

				if (!this.user().signed()) return 'sign'

				// После прохождения sign текущая кампания всегда есть, можно переключиться только на другую кампанию
				// Первая кампания включается на этапе sign
				// Также кампании нельзя удалить, только перевести в стадию закрыта

				if (this.user().campaign_current()?.owner()?.id() === this.user().id()) return 'admin'

				return 'qwe'

			} else {

				return 'norole'

			}

		}

		sub() {
			return [ this.cabinets()[ this.role() ] ]
		}

	}

}
