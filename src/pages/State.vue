<script setup lang="ts">
import { ref } from 'vue'
import { useMachine } from '@xstate/vue'
import { createMachine } from 'xstate'

const toggleMachine = createMachine({
	predictableActionArguments: true,
	id: 'toggle',
	initial: 'inactive',
	states: {
		inactive: {
			on: { TOGGLE: 'active' },
		},
		active: {
			on: { TOGGLE: 'inactive' },
		},
	},
})
const { state, send } = useMachine(toggleMachine)
const typeOptions = ['Документ', 'Задание', 'Группа заданий']
const type = ref('Документ')
</script>

<template lang="pug">
q-page(padding)
	.container
		h2 Hello
		button(@click="send('TOGGLE')") {{ state.value === 'inactive' ? 'Click to activate' : 'Active! Click to deactivate' }}

		.type
			.row.items-center
				.label Тип:
				q-select(v-model="type" :options="typeOptions" dense @update:model-value="send('TOGGLE')")
			.row.items-center
				.label Вид:
				q-select(v-model="type" :options="typeOptions" dense)
</template>

<style scoped lang="scss">
.type {
	margin-left: 1rem;
	margin-top: 1rem;
	display: flex;
	justify-content: flex-start;
	gap: 4rem;
}
</style>
