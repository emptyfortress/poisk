<template lang="pug">
q-menu(context-menu)
	q-list
		q-item(v-for="item in menu" :key="item.id" clickable v-close-popup @click="item.action")
			q-item-section(avatar)
				q-icon(:name="item.icon")
			q-item-section
				q-item-label {{item.label}}
</template>

<script setup lang="ts">

const props = defineProps<{
	stat: Stat
}>()

const emit = defineEmits(['addOp', 'addCond', 'kill', 'cut', 'paste'])

const addOp = () => {
	emit('addOp', props.stat)
}
const addCond = () => {
	emit('addCond', props.stat)
}
const kill = () => {
	emit('kill', props.stat)
}

const menu = [
	{
		id: 0,
		label: 'Добавить оператор',
		icon: 'mdi-gate-and',
		action: addOp,
	},
	{
		id: 1,
		label: 'Добавить условие',
		icon: 'mdi-crosshairs-question',
		action: addCond,
	},
	{ id: 2, label: 'Удалить', icon: 'mdi-trash-can-outline', action: kill },
]
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.q-item:last-child {
	border-top: 1px solid #ccc;
	color: darkred;
}

.disab {
	opacity: 0.5;
	cursor: not-allowed !important;
}
</style>
