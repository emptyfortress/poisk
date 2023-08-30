<script setup lang="ts">
import { ref, watch } from 'vue'
import draggable from "vuedraggable"

const list = ref([
	{ id: 0, name: 'Номер', check: true },
	{ id: 1, name: 'Контрагент', check: true },
	{ id: 2, name: 'Сумма', check: true },
	{ id: 3, name: 'Дата подписания', check: true },
	{ id: 4, name: 'Ответственный', check: true },
])

const emit = defineEmits(['change'])

watch(list.value, () => {
	emit('change')
})
</script>

<template lang="pug">
.grid
	.text-right Настройте видимость <br />и порядок следования колонок:
	draggable(:list="list"
		item-key="id"
		class="list-group"
		ghost-class="ghost"
		)

		template(#item="{ element }")
			.list-group-item
				q-checkbox(v-model="element.check" dense :label="element.name")
</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: 300px auto;
	align-items: start;
	gap: 2rem;
}

.list-group-item {
	background: #fff;
	padding: 6px 1rem;
	width: 200px;
	margin-bottom: 2px;
}

.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}
</style>
