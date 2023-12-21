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
const active = ref(new Array(30).fill(true))
const rukovoditel = ref('yes')
const empty = computed(() => {
	return myFlatTree.value.filter((el: any) => el.vis !== false).length == 0
})
const isRadio = (item: any) => {
	if (item.ruk == true || item.text2 == 'Значение задано' || item.text2 == 'Значение на задано') {
		return true
	} else return false
}
const isInput = (item: any) => {
	if (item.man == true || item.date == true) {
		return false
	} else return true
}
const isSelector = (item: any) => {
	if (item.man == true || item.date == true) {
		return true
	} else return false
}
</script>

<template lang="pug">
q-dialog(v-model="modelValue" persistent)
	q-card(style="width: 700px; max-width: 80vw; cursor: default;")
		q-form
			q-card-section.row.items-center.q-pb-none
				.text-h6 {{ store.currentNode?.data.text }}
				q-space
				q-btn( icon="mdi-close" flat round dense @click="emit('close')")
			q-card-section.bread
				.descr {{ store.currentNode?.data.text1 }}
			q-card-section
				// pre {{ myFlatTree }}
	
				.grid
					template(v-for="( item, index ) in myFlatTree" :key="item.id")
						template(v-if="item.type == 1 && item.vis == true")
							.mainlabel(:class="{dis : !active[index]}")
								span {{ item.text }}
								span.addition(v-if="item.text2 !== 'Равно'") {{ item.text2 }}
							.row(v-if="isRadio(item)")
								q-radio(v-model="rukovoditel" val="yes" label="Да" :disable="!active[index]")
								q-radio(v-model="rukovoditel" val="no" label="Нет" :disable="!active[index]")

							q-select(v-if="isSelector(item) && !isRadio(item)" v-model="item.text3" :options="values" dense filled :disable="!active[index]")
								template(v-slot:prepend v-if="item.date" )
									q-icon(name="mdi-calendar")
								template(v-slot:prepend v-if="item.man")
									q-icon(name="mdi-book-open-page-variant-outline")

							q-input(v-if="isInput(item) && !isRadio(item)" dense v-model="item.inp" filled hide-bottom-space :disable="!active[index]")
							q-toggle(v-model="active[index]" dense)

				template(v-if="empty")
					.text-subtitle1
						q-icon.q-mr-md(name="mdi-alert-outline" size="md" color="negative")
						span Поиск не настроен или все условия скрыты.
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" @click="emit('close')") 
				q-btn(unelevated color="primary" label="Искать" @click="action") 

</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: 1fr 1fr 36px;
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
.mainlabel::after {
	content: ':';
}
.addition {
	text-transform: lowercase;
	margin-left: 0.5rem;
	&::before {
		content: '(';
	}
	&::after {
		content: ')';
	}
}
.descr {
	border-bottom: 1px solid #ccc;
}
</style>
