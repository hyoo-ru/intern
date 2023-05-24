namespace $.$$ {

	export class $hyoo_intern_company_catalog extends $.$hyoo_intern_company_catalog {

		@ $mol_mem
		spreads() {
			return this.access() === 'get' ?
				this.companies().map( company => this.Company_view(company.id()) )  :
				[]
		}

	}

}
