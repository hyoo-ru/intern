namespace $.$$ {

	export class $hyoo_intern_company_catalog extends $.$hyoo_intern_company_catalog {

		@ $mol_mem
		ids() {
			return this.companies().map( c => c!.id() )
		}

		@ $mol_mem_key
		company(id: string){
			return this.campaign().company(id)!
		}

		@ $mol_mem
		companies() {
			return this.campaign().companies()
		}

		@ $mol_action
		add() {
			return this.campaign().company_add()
		}

	}

}
