<script setup lang="ts">
// import { ref, computed } from 'vue'
// import { useMachine } from '@xstate/vue'
// import { createMachine } from 'xstate'
// import { typeOptions, vidOptions } from '@/stores/editor'
import { useEditor } from '@/stores/editor'

const editor = useEditor()

// const editor = createMachine({
// 	predictableActionArguments: true,
// 	id: 'editor',
// 	initial: 'doc',
// 	states: {
// 		doc: {
// 			on: {
// 				TO_TASK: 'task',
// 			},
// 		},
// 		task: {
// 			on: {},
// 		},
// 		group: {
// 			on: {},
// 		},
// 	},
// })
// const { state, send } = useMachine(editor)

// const type = ref('Документ')
// const vid = ref()
// const calcVid = computed(() => {
// 	if (state.value.matches('doc')) {
// 		return vidOptions[0]
// 	} else return vidOptions[1]
// })
</script>

<template lang="pug">
q-page(padding)
	.container
		h2 Hello

		.type
			.row.items-center
				.label Тип:
				q-select(v-model="editor.type" :options="editor.typeOptions" dense )
			.row.items-center
				.label Вид:
				q-select(v-model="editor.vid" :options="editor.calcVid" dense)
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
