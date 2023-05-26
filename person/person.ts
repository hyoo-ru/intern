namespace $ {

	export class $hyoo_intern_person extends $hyoo_crowd_struct {

		@ $mol_mem
		peer_id( next?: $mol_int62_string ) {
			return this.sub( 'peer', $hyoo_crowd_reg ).str( next ) ?? null
		}

		@ $mol_mem
		role( next?: string ) {
			return this.sub( 'role', $hyoo_crowd_reg ).str( next ) ?? 'norole' as keyof ReturnType<$hyoo_intern["role"]>
		}

		@ $mol_mem
		name( next?: string ) {
			return this.sub( 'name', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		name_family( next?: string ) {
			return this.sub( 'name_family', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		email( next?: string ) {
			return this.sub( 'email', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		mentor_vacancy( ) {
			return this.sub( 'vacancy', $hyoo_intern_vacancy ) ?? null
		}

		@ $mol_mem
		signed(next?: boolean) {
			return this.sub( 'signed', $hyoo_crowd_reg ).bool( next ) ?? false
		}

		@ $mol_mem
		campaigns() {
			const node = this.sub('campaigns', $hyoo_intern_entity_links<typeof $hyoo_intern_campaign>)
			node.Item = $hyoo_intern_campaign
			return node
		}

		@ $mol_mem
		avatar_node() {
			return this.yoke( 'avatar', $hyoo_crowd_blob )!
		}

		@ $mol_mem
		avatar() {
			if (this.avatar_node().list().length > 0) return this.avatar_node().uri()
			return `https://robohash.org/${this.id()}.png`
		}

		@ $mol_mem
		about( next?: string ) {
			return this.sub( 'about', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		status( next?: string ) {
			return this.sub( 'status', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		country( next?: string ) {
			return this.sub( 'country', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		city( next?: string ) {
			return this.sub( 'city', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		phone( next?: string ) {
			return this.sub( 'phone', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		job_status( next?: 'working_for_hire' | 'self-employed' | 'unemployed' ) {
			return this.sub( 'job_status', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		skills( next?: string[] ) {
			return this.sub( 'skills', $hyoo_crowd_list ).list( next ).map(String)
		}

		@ $mol_mem
		jobs_node() {
			return this.sub( 'jobs', $hyoo_crowd_list )
		}

		@ $mol_mem
		jobs(
			next?: Array<{
				position: string,
				functions: string,
				company: string,
				industry: string,
				date_start: string,
				date_end: string,
				present: boolean,
			}>
		) {
			return this.jobs_node().list( next ) as Exclude<typeof next, undefined>
		}

		@ $mol_mem
		institutions_node() {
			return this.sub( 'institutions', $hyoo_crowd_list )
		}

		@ $mol_mem
		institutions(
			next?: Array<{
				degree: string,
				institution: string,
				department: string,
				specialty: string,
				date_finish: string,
			}>
		) {
			return this.institutions_node().list( next ) as Exclude<typeof next, undefined> 
		}

		// @ $mol_mem
		// signed() {
		// 	return !!this.name()
		// }

		// @ $mol_mem
		// posts_node() {
		// 	return this.sub( 'posts', $hyoo_crowd_list )
		// }

		// @ $mol_mem
		// posts( next?: $hyoo_intern_post[] ) {
		// 	const ids = this.posts_node().list( next && next.map( obj => obj.id() ) )
		// 	return ids.map( id => this.domain().post( id as $mol_int62_string ) )
		// }

		// @ $mol_action
		// post_add( obj: $hyoo_intern_post ) {
		// 	obj.person( this )
		// 	this.posts_node().add( obj.id() )
		// }

		// @ $mol_action
		// post_drop( obj: $hyoo_intern_post ) {
		// 	this.posts_node().drop( obj.id() )
		// }

		// @ $mol_mem
		// projects_node() {
		// 	return this.sub( 'projects', $hyoo_crowd_list )
		// }

		// @ $mol_mem
		// projects( next?: $hyoo_intern_project[] ) {
		// 	const ids = this.projects_node().list( next && next.map( obj => obj.id() ) )
		// 	return ids.map( id => this.domain().project( $mol_int62_string_ensure(id)! ) )
		// }

		// @ $mol_action
		// project_add( obj: $hyoo_intern_project ) {
		// 	obj.person( this )
		// 	this.projects_node().add( obj.id() )
		// }

		// @ $mol_action
		// project_drop( obj: $hyoo_intern_project ) {
		// 	this.posts_node().drop( obj.id() )
		// }

		// @ $mol_mem
		// pubs(next?: $hyoo_intern_person[]) {
		// 	const ids = this.sub('pubs', $hyoo_crowd_list).list( next && next.map( obj => obj.id() ) )
		// 	return ids
		// 		.filter( id => $mol_int62_string_ensure(id))
		// 		.map( id => this.domain().person( $mol_int62_string_ensure(id)! ) )
		// }

		// @ $mol_mem
		// subs(next?: $hyoo_intern_person[]) {
		// 	const ids = this.sub('subs', $hyoo_crowd_list).list( next && next.map( obj => obj.id() ) )
		// 	return ids
		// 		.filter( id => $mol_int62_string_ensure(id))
		// 		.map( id => this.domain().person( $mol_int62_string_ensure(id)! ) )
		// }

	}

}
