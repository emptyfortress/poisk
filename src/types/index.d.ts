interface NodeData {
	// id: number
	text1: string
	text2: string
	text3?: string
	edit?: boolean
	attribute?: boolean
	selected?: boolean
	restrict?: boolean
	icon?: string
	type: number
	typ?: number
	// fields: Select[]
	drop?: boolean
}

interface Stat {
	data: NodeData
	open: boolean // Is opened.
	parent: Stat<T> | null // Parent stat.
	children: Stat<T>[] // Children stats.
	level: number // Level start from 1.
	isStat: boolean // Detect if is stat object.
	hidden: boolean // If hidden.
	checked: boolean | null // If checked. null mean just some children checked.
	draggable: boolean | null // null means inherit parent.
	droppable: boolean | null // null means inherit parent.
	style: any // Customize node style. Vue's style format.
	class: any // Customize node class name. Vue's class format.
}

interface Select {
	id: number
	label: string
	check: boolean
	type: number
	sort: boolean
	filter: boolean
	notset: boolean
	options?: String[]
	val?: string
}

interface TreeNode {
	text: string
	text1?: string
	hidden: boolean
	type: number
	selected: boolean
	children?: TreeNode[]
	fields: Select[]
}
