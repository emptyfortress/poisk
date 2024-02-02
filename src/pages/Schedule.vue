<script setup lang="ts">
import { ref } from 'vue'

const choose = ref('')
const month = ref('')
const expanded = ref([false, false, false])
const day = ref(2)
const day1 = ref(2)
const week = ref([true, true, true, true, true, false, false])
const order = ref('Второй')
const dayweek = ref('Понедельник')
const options1 = ['Первый', 'Второй ', 'Третий', 'Четвертый']
const options2 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
const am = ref('11:00 am')
const pm = ref('12:00 pm')
const time = ref('')
const startdate = ref('2023-01-01')
const enddate = ref('2024-01-01')
const hour = ['минут', 'часов']
const min = ref('минут')
const inf = ref(true)
const minnum = ref(10)
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag Расписание
		br
		q-list(separator)
			q-expansion-item(group="group" v-model="expanded[0]")
				template(v-slot:header)
					q-item-section(avatar)
						q-icon(name="mdi-calendar-today")
					q-item-section
						q-radio(v-model="choose" val="day" label="Ежедневно" @click="expanded[0] = !expanded[0]")
				q-card
					q-card-section.row.items-center.q-gutter-x-md
						label Повторять каждые:
						q-input(v-model="day" type="number" dense filled min="1")
						label дн.

			q-expansion-item(group="group" v-model="expanded[1]" inset)
				template(v-slot:header)
					q-item-section(avatar)
						q-icon(name="mdi-calendar-week")
					q-item-section
						q-radio(v-model="choose" val="week" label="Еженедельно" @click="expanded[1] = !expanded[1]")
				q-card
					q-card-section.row.items-center.q-gutter-x-md
						label Повторять каждые:
						q-input(v-model="day1" type="number" dense filled min="1")
						label недели, <span class="q-ml-lg">в</span>
						q-checkbox.g-ml-lg(v-model="week[0]" dense label="Пн")
						q-checkbox(v-model="week[1]" dense label="Вт")
						q-checkbox(v-model="week[2]" dense label="Ср")
						q-checkbox(v-model="week[3]" dense label="Чт")
						q-checkbox(v-model="week[4]" dense label="Пт")
						q-checkbox(v-model="week[5]" dense label="Сб")
						q-checkbox(v-model="week[6]" dense label="Вс")

			q-expansion-item(group="group" v-model="expanded[2]")
				template(v-slot:header)
					q-item-section(avatar)
						q-icon(name="mdi-calendar-month")
					q-item-section
						q-radio(v-model="choose" val="month" label="Ежемесячно" @click="expanded[2] = !expanded[2]")
				q-card
					q-card-section.row.items-center.q-gutter-x-md
						q-radio(v-model="month" val="number" label="Число месяца:" checked-icon="mdi-checkbox-outline" unchecked-icon="mdi-checkbox-blank-outline")
						q-input(v-model="day" type="number" dense filled min="1")
					q-card-section.row.items-center.q-gutter-x-md
						q-radio(v-model="month" val="weekday" label="День недели:" checked-icon="mdi-checkbox-outline" unchecked-icon="mdi-checkbox-blank-outline")
						label Каждую
						q-select(v-model="order" dense filled :options="options1")
						q-select(v-model="dayweek" dense filled :options="options2")
						label каждого
						q-input(v-model="day" type="number" dense filled min="1")
						label месяца
			br
			q-separator(space)
			br
			q-expansion-item(icon="mdi-timer-outline" label="Периодичность в день")
				q-card.test
					q-card-section.row.items-center.q-gutter-x-md
						q-radio(v-model="time" val="one" label="Время" checked-icon="mdi-checkbox-outline" unchecked-icon="mdi-checkbox-blank-outline")
						q-input(v-model="am" dense filled )
					q-card-section.row.items-center.q-gutter-x-md
						q-radio(v-model="time" val="two" label="Каждые" checked-icon="mdi-checkbox-outline" unchecked-icon="mdi-checkbox-blank-outline")
						q-input(v-model="minnum" dense filled type="number" style="width: 80px;")
						q-select(v-model="min" dense filled :options="hour")
						label Время начала:
						q-input(v-model="am" dense filled )
						label Время завершения:
						q-input(v-model="pm" dense filled )
			q-expansion-item(icon="mdi-flag-checkered" label="Продолжительность")
				q-card.test1
					q-card-section.row.items-center.q-gutter-x-md
						label Дата начала:
						q-input(v-model="startdate" dense filled)
							template(v-slot:append)
								q-icon.cursor-pointer(name="mdi-calendar")
									q-popup-proxy(cover transition-show="scale" transition-hide="scale")
										q-date(v-model="startdate" v-close-popup)

						label Дата завершения:
						q-input(v-model="enddate" dense filled :disable="inf")
							template(v-slot:append)
								q-icon.cursor-pointer(name="mdi-calendar")
									q-popup-proxy(cover transition-show="scale" transition-hide="scale")
										q-date(v-model="enddate" v-close-popup)
						.q-ml-xl &nbsp;
						q-checkbox(v-model="inf" dense label="Бесконечно")
</template>

<style scoped lang="scss">
.container {
	padding-left: 1rem;
	padding-right: 1rem;
	max-width: 1000px;
	margin: 0 auto;
}
:deep(.q-expansion-item--expanded) {
	background: white;
	border: 1px solid #ccc;
}
:deep(.q-expansion-item__content) {
	border-top: 1px dotted #dedede;
}
:deep(.q-card) {
	border-radius: 4px;
	font-size: 0.9rem;
}
.q-input {
	font-size: 1.1rem;
	width: 120px;
}
.q-select {
	width: 200px;
}
.test {
	font-size: 0.9rem;
	.q-select {
		width: 150px;
	}
	.q-input {
		width: 120px;
	}
}
.test1 {
	.q-input {
		width: 160px;
	}
}
</style>
