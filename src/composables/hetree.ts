import { ref } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()
const tree = ref()

const select = (e: Stat) => {
	tree.value.statsFlat.map((item: Stat) => (item.data.selected = false))
	e.data.selected = true
	// store.setCurrentNode(e)
}

const flatCodes = (tree: any) => {
	return tree.value.statsFlat()
}

const toggle = (stat: any) => {
	stat.open = !stat.open
}

export { tree, select, toggle, flatCodes }
