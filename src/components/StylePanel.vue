<script setup lang="ts">
// import { ref } from 'vue'
import { useView } from '@/stores/views'

const view = useView()

const wOptions = [300, 400, 500, 600]
const sOptions = ['normal', 'italic']
const aOptions = ['left', 'center', 'right']
</script>

<template lang="pug">
div
	.grid2
		q-checkbox.ful.q-mb-md( v-model="view.head.auto" dense label="Использовать настройки по умолчанию")
		fieldset(:class="{dis: view.head.auto}")
			legend Текст
			.form
				label Размер шрифта, rem:
				q-slider(v-model="view.head.size" label :min="0.3" :max="1.8" :step="0.01" :disable="view.head.auto")
				label Жирность
				q-select(v-model="view.head.weight" dense outlined bg-color="white" :options="wOptions" :disable="view.head.auto")
				label Стиль
				q-select(v-model="view.head.style" dense outlined bg-color="white" :options="sOptions" :disable="view.head.auto")
				label Выравнивание
				q-select(v-model="view.head.align" dense outlined bg-color="white" :options="aOptions" :disable="view.head.auto")
				label Цвет шрифта
				q-input(dense outlined bg-color="white" v-model="view.head.fontColor" :disable="view.head.auto")
					template(v-slot:append)
						q-icon(name="mdi-eyedropper-variant" class="cursor-pointer")
							q-popup-proxy(cover transition-show="scale" transition-hide="scale")
								q-color(v-model="view.head.fontColor")

		fieldset(:class="{dis: view.head.auto}")
			legend Фон
			.form
				label Отступы (верт., гориз.), px
				.row.q-gutter-x-xs
					q-input.small( v-model="view.head.padding[0]" dense outlined bg-color="white" type="number" :disable="view.head.auto")
					q-input.small( v-model="view.head.padding[1]" dense outlined bg-color="white" type="number" :disable="view.head.auto")
				label Цвет фона
				q-input(dense outlined bg-color="white" v-model="view.head.bgColor" :disable="view.head.auto")
					template(v-slot:append)
						q-icon(name="mdi-eyedropper-variant" class="cursor-pointer")
							q-popup-proxy(cover transition-show="scale" transition-hide="scale")
								q-color(v-model="view.head.bgColor")
				label Толщина рамки, px
				.row.q-gutter-x-xs
					q-input.small( v-model="view.head.borderWidth[0]" dense outlined bg-color="white" type="number" :disable="view.head.auto")
					q-input.small( v-model="view.head.borderWidth[1]" dense outlined bg-color="white" type="number" :disable="view.head.auto")
					q-input.small( v-model="view.head.borderWidth[2]" dense outlined bg-color="white" type="number" :disable="view.head.auto")
					q-input.small( v-model="view.head.borderWidth[3]" dense outlined bg-color="white" type="number" :disable="view.head.auto")
				label Цвет рамки
				q-input( dense outlined bg-color="white" v-model="view.head.borderColor" :disable="view.head.auto")
					template(v-slot:append)
						q-icon(name="mdi-eyedropper-variant" class="cursor-pointer")
							q-popup-proxy(cover transition-show="scale" transition-hide="scale")
								q-color(v-model="view.head.borderColor")
				label Тень
				q-input( dense outlined bg-color="white" v-model="view.head.shadowColor" :disable="view.head.auto")
					template(v-slot:append)
						q-icon(name="mdi-eyedropper-variant" class="cursor-pointer")
							q-popup-proxy(cover transition-show="scale" transition-hide="scale")
								q-color(v-model="view.head.shadowColor")
</template>

<style scoped lang="scss">
.grid2 {
	margin-top: 1rem;
	display: grid;
	grid-template-columns: 1fr 1.4fr;
	justify-items: start;
	align-items: start;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.ful {
	grid-column: 1/-1;
}
.form {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: stretch;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
	font-size: 0.9rem;
}
.small {
	width: 70px;
}
</style>
