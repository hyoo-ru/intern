namespace $.$$ {

	export class $hyoo_intern_company_catalog extends $.$hyoo_intern_company_catalog {

		@ $mol_mem
		spreads() {
			return this.access() === 'get' ?
				this.companies().map( company => this.Company_view(company.id()) )  :
				[]
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
