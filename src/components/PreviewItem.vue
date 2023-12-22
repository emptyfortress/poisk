<script setup lang="ts">
import { ref, computed } from 'vue'
import { values } from '@/stores/select'

type PreviewItem = {
	id: string
	parents: string[]
	type: number
	typ: number
	text: string
	text1: string
	text2: string
	text3: string
	inp: string
	man: boolean
	date: boolean
	ruk: boolean
	vis: boolean
}
const props = defineProps<{
	item: PreviewItem
	index: number
}>()

const isRadio = computed(() => {
	if (
		props.item.ruk == true ||
		props.item.text2 == 'Значение задано' ||
		props.item.text2 == 'Значение не задано'
	) {
		return true
	} else return false
})

const isInput = computed(() => {
	if (props.item.man == true || props.item.date == true) {
		return false
	} else return true
})
const isSelector = computed(() => {
	if (props.item.man == true || props.item.date == true) {
		return true
	} else return false
})
const active = ref(new Array(30).fill(true))
const rukovoditel = ref('yes')

const par = computed(() => {
	if (props.item.parents.length > 2) {
		return props.item.parents.at(-1)
	}
	return null
})
</script>

<template lang="pug">
template(v-if="props.item.type == 1 && props.item.vis == true")
	.mainlabel(:class="{dis : !active[props.index]}")
		span.par(v-if="par") {{ par }}
		span {{ props.item.text }}
		span.addition(v-if="props.item.text2 !== 'Равно'") {{ props.item.text2 }}
	.row(v-if="isRadio")
		q-radio(v-model="rukovoditel" val="yes" label="Да" :disable="!active[props.index]")
		q-radio(v-model="rukovoditel" val="no" label="Нет" :disable="!active[props.index]")

	q-select(v-if="isSelector && !isRadio" v-model="props.item.text3" :options="values" dense filled :disable="!active[props.index]")
		template(v-slot:prepend v-if="props.item.date" )
			q-icon(name="mdi-calendar")
		template(v-slot:prepend v-if="props.item.man")
			q-icon(name="mdi-book-open-page-variant-outline")

	q-input(v-if="isInput && !isRadio" dense v-model="props.item.inp" filled hide-bottom-space :disable="!active[props.index]")
	q-toggle(v-model="active[props.index]" dense)
</template>

<style scoped lang="scss">
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
.par {
	&::after {
		content: ' > ';
	}
}
</style>
