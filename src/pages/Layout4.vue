<script setup lang="ts">
import { ref, computed } from 'vue'

const splitterModel = ref(50)

const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 130) + 'px;'
})
const showSetup = ref(false)
</script>

<template lang="pug">
.cont
	.row.justify-between.items-center
		.zag.q-mb-lg Просроченные задания
		q-btn(unelevated color="primary" icon="mdi-tune-vertical-variant" label="Настроить" @click="showSetup = !showSetup" size="sm")

	q-splitter(v-model="splitterModel" :limits="[0, Infinity]" :style="hei" horizontal v-if="showSetup")
		template(v-slot:before)
			q-card
				q-card-section
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
					p fuck
		template(v-slot:after v-if="showSetup") fooo

	template(v-else)
		q-card
			q-card-section
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck

		// template(v-if="preview")
		// 	ul.list-group
		// 		li.list-group-item Тип
		// 		li.list-group-item Вид карточки
		// 		li.list-group-item Статус
		// 		li.list-group-item Исполнитель
		// 		li.list-group-item Дата создания
		// 	.gr
		// 		.sam(v-for="n in 5") -- data --
		// 		.sam(v-for="n in 5") -- data --

</template>

<style scoped lang="scss">
.q-page {
	// height: calc(100vh - 64px);
	background: yellow;
}
.cont {
	height: calc(100vh - 90px);
	background: pink;
	// padding: 0;
}
// .blo {
// 	margin-right: 0.5rem;
// 	height: calc(100vh - 180px);
// }

// .list {
// 	height: 100%;
// }

// .main {
// 	border: 1px solid var(--my-border-color);
// 	background: var(--bg-panel);
// 	// height: 100%;
// 	margin-left: 0.5rem;
// 	margin-right: 0.5rem;
// 	// padding: 1rem;
// }
// .tree {
// 	height: 100%;
// 	margin-left: 0.5rem;
// 	padding-top: 0.4rem;
// }

ul,
li {
	margin: 0;
	padding: 0;
	list-style: none;
}
.list-group {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	border: 1px solid #e0e0e0;
	border-bottom: none;
	background: white;
	padding: 1px;
	gap: 2px;
}
.list-group-item {
	font-size: 0.8rem;
	background: white;
	cursor: move;
	color: #666666;
	padding: 0.7rem 1rem;
	line-height: 1.2;
	position: relative;
	text-align: left;
	font-weight: 500;
	border: 1px solid #e0e0e0;
	min-width: 127px;
}
.gr {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	background: white;
	gap: 1px;
}
.sam {
	font-size: 1rem;
	background: white;
	color: #000;
	padding: 0.7rem 1rem;
	line-height: 1.2;
	min-width: 127px;
	border-bottom: 1px solid #e0e0e0;
}
:deep(.q-splitter--horizontal > .q-splitter__separator) {
	border-top: 2px dotted black;
}
</style>
