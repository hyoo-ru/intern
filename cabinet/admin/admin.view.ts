namespace $.$$ {

	export class $hyoo_intern_cabinet_admin extends $.$hyoo_intern_cabinet_admin {

		@ $mol_mem
		campaign() {
			const campaigns = this.user().campaigns()
			const campaign = campaigns.length > 0 ? this.user().campaigns()[0] : this.user().campaign_add()
			return campaign
		}

	}

}
