namespace $.$$ {

	const page_default = {
		// width =
		// 60rem is max if there is free space
		// 40rem is min if 100% greater than 40rem
		// 100% is min if 100% less than 40rem
		maxWidth: 'min(100%, 60rem)' as any,
		flex: { 
			grow: 1,
			basis: '40rem' as any,
		},
	}

	$mol_style_define( $hyoo_intern, {

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
