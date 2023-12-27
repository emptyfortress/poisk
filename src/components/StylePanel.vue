<script setup lang="ts">
import { ref } from 'vue'

const auto = ref(false)
const size = ref(11)
const weight = ref('normal')
const color = ref('#FF00FF')
</script>

<template lang="pug">
div
	.grid2
		q-checkbox.ful.q-mb-md(v-model="auto" dense label="Использовать настройки по умолчанию")
		fieldset
			legend Шрифт
			.form
				label Размер шрифта, px:
				q-input(v-model="size" dense outlined bg-color="white" type="number")
				label Жирность
				q-select(v-model="weight" dense outlined bg-color="white")
				label Стиль
				q-select(v-model="weight" dense outlined bg-color="white")
				label Выравнивание
				q-select(v-model="weight" dense outlined bg-color="white")
				label Цвет шрифта
				q-input(dense outlined bg-color="white" v-model="color")
					template(v-slot:append)
						q-icon(name="mdi-eyedropper-variant" class="cursor-pointer")
							q-popup-proxy(cover transition-show="scale" transition-hide="scale")
								q-color(v-model="color")
				// q-select(v-model="weight" dense outlined bg-color="white")

		fieldset
			legend Фон
			.form
				label Отступы (гориз.,верт.), px
				.row.q-gutter-x-xs
					q-input.small( v-model="size" dense outlined bg-color="white" type="number")
					q-input.small( v-model="size" dense outlined bg-color="white" type="number")
				label Цвет фона
				q-input(dense outlined bg-color="white" v-model="color")
					template(v-slot:append)
						q-icon(name="mdi-eyedropper-variant" class="cursor-pointer")
							q-popup-proxy(cover transition-show="scale" transition-hide="scale")
								q-color(v-model="color")
				label Толщина рамки
				.row.q-gutter-x-xs
					q-input.small( v-model="size" dense outlined bg-color="white" type="number")
					q-input.small( v-model="size" dense outlined bg-color="white" type="number")
					q-input.small( v-model="size" dense outlined bg-color="white" type="number")
					q-input.small( v-model="size" dense outlined bg-color="white" type="number")
				label Цвет рамки
				q-input( dense outlined bg-color="white" v-model="color")
					template(v-slot:append)
						q-icon(name="mdi-eyedropper-variant" class="cursor-pointer")
							q-popup-proxy(cover transition-show="scale" transition-hide="scale")
								q-color(v-model="color")
				label Тень
				q-input( dense outlined bg-color="white" v-model="color")
					template(v-slot:append)
						q-icon(name="mdi-eyedropper-variant" class="cursor-pointer")
							q-popup-proxy(cover transition-show="scale" transition-hide="scale")
								q-color(v-model="color")
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
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
	font-size: 0.9rem;
}
.small {
	width: 70px;
}
</style>
