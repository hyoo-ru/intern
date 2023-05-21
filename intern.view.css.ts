namespace $.$$ {

	const page_default = {
		flex: { 
			grow: 1,
			basis: 'min(100%, 60rem)' as any,
		},
	}

	$mol_style_define( $hyoo_intern, {

		justifyItems: 'center',
		
		Menu: {
			flex: {
				basis: '20rem',
				shrink: 0,
			},
			Head: {
				justifyContent: 'center',
				alignItems: 'center',
				gap: $mol_gap.block,
			},
			Foot: {
				padding: 0,
			},
		},

		Label: {
			padding: $mol_gap.block,
		},

		Register_page: page_default,
		About_page: page_default,
		Intern_profile: page_default,
		Vacancies: page_default,
		Applications: page_default,
		Invitations: page_default,

		Register: {
			margin: {
				top: $mol_gap.block,
			},
		},

		Register_form: {
			Foot: {
				justifyContent: 'center',
			}
		},
		
		Logo: {
			width: '3rem',
			height: '3rem',
		},
		
		Descr: {
			color: $mol_theme.shade,
		},
		
	 } )

}
