namespace $.$$ {

	const Page = {
		maxWidth: 'min(100%, 60rem)' as any,
		flex: { 
			grow: 1,
			basis: '40rem' as any,
		},
		// ":last-child": {
		// 	margin: {
		// 		right: 'auto'
		// 	},
		// } as any,
	}

	$mol_style_define( $hyoo_intern, {

		Menu: {
			// ":first-child": {
			// 	margin: {
			// 		left: 'auto'
			// 	},
			// },
			flex: {
				basis: '20rem',
				shrink: 0,
			},
			Head: {
				justifyContent: 'center',
				alignItems: 'center',
				gap: $mol_gap.block,
			},
		},

		Label: {
			padding: $mol_gap.block,
		},

		Intern_profile: Page,
		Career_school: Page,
		Tests: Page,
		Championship: Page,
		Responses: Page,

		Logo: {
			width: '3rem',
			height: '3rem',
		},
		
		Descr: {
			color: $mol_theme.shade,
		},
		
	 } )

}
