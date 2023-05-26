namespace $.$$ {

	export class $hyoo_intern_cabinet_candidate extends $.$hyoo_intern_cabinet_candidate {

		@ $mol_action
		send_resume() {
			this.campaign().candidates_on_review().item_push( this.user() )
		}

	}

}
