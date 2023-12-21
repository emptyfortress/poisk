<script setup lang="ts">
import { ref, computed } from 'vue'
import type { QTableColumn } from 'quasar'
import { useStore } from '@/stores/store'
import { values } from '@/stores/select'
import { uid } from 'quasar'

const modelValue = defineModel()
const props = defineProps<{
	tree: any[]
}>()

const emit = defineEmits(['close', 'find'])
const store = useStore()

const getMembers = (members: any): any => {
	let children: any = []
	const flattenMembers = members.map((m: any) => {
		if (m.children && m.children.length) {
			children = [...children, ...m.children]
		}
		return m
	})

	return flattenMembers.concat(children.length ? getMembers(children) : children)
}

const myFlatTree = computed(() => {
	return getMembers(props.tree)
		.filter((el: any) => el.type == 1 || el.type == 0)
		.map((item: any) => {
			return {
				id: uid(),
				type: item.type,
				typ: item.typ,
				text: item.text,
				text1: item.text1,
				text2: item.text2,
				text3: item.text3,
				inp: item.inp,
				man: item.man,
				date: item.date,
				ruk: item.ruk,
				vis: item.vis,
			}
		})
})
const action = () => {
	emit('close')
	emit('find')
}
const text = computed(() => {
	if (!!props.stat.data.man || !!props.stat.data.date) {
		return false
	} else return true
})
const active = ref(new Array(myFlatTree.length).fill(true))
</script>

<template lang="pug">
q-dialog(v-model="modelValue" persistent)
	q-card(style="width: 700px; max-width: 80vw; cursor: default;")
		// pre {{  props.tree }}
		q-form
			q-card-section.row.items-center.q-pb-none
				.text-h6 {{ store.currentNode?.data.text }}
				q-space
				q-btn( icon="mdi-close" flat round dense @click="emit('close')")
			q-card-section.bread
				.descr {{ store.currentNode?.data.text1 }}
			q-card-section
				pre {{ myFlatTree }}
	
				.grid
					template(v-for="item in myFlatTree" :key="item.id")
						template(v-if="item.type == 1")
							div(:class="{dis : !active[0]}") {{ item.text }}
							q-select(v-if="item.date || item.man" v-model="item.text3" :options="values" :label="item.text2" dense filled :disable="!active[0]")
								template(v-slot:prepend v-if="item.date")
									q-icon(name="mdi-calendar")
								template(v-slot:prepend v-if="item.man")
									q-icon(name="mdi-book-open-page-variant-outline")

							q-input(v-else dense v-model="item.inp" outlined bg-color="white" :label="item.text2" hide-bottom-space :disable="!active[0]")
							q-toggle(v-model="active[0]" dense)

			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" @click="emit('close')") 
				q-btn(unelevated color="primary" label="Искать" @click="action") 

</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: 1fr 2fr 36px;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.grid3 {
	margin-top: 0.5rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 36px;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.q-input,
.q-select {
	width: 100%;
}
.dis {
	opacity: 0.4;
}
</style>
