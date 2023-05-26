namespace $.$$ {

	export class $hyoo_intern_cabinet_norole extends $.$hyoo_intern_cabinet_norole {

		@ $mol_action
		send_resume() {
			this.campaign().candidates_on_review().item_push( this.user() )
			this.role( 'intern' )
		}

		open_resume() {
			this.spread( 'resume_page' )
		}

	}

}
