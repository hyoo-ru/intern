namespace $.$$ {

	export class $hyoo_intern_company_catalog extends $.$hyoo_intern_company_catalog {

		@ $mol_mem
		spreads() {
			return this.access() === 'get' ?
			Object.fromEntries( this.companies()
				.map(
					company => [ company!.id(), this.Company_edit(company!.id()) ] 
				) 
			) : {}
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
