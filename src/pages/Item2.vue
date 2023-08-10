<script setup lang="ts">
import { onBeforeMount, ref, watchEffect } from 'vue'
// import { useRoute } from 'vue-router'
// import { rows } from '@/stores/data'
import { list } from '@/stores/list'
import { randomNumber } from '@/utils/utils'
import InfoPanel from '@/components/InfoPanel.vue'
import AddMeasure from '@/components/AddMeasure.vue'
import Masonry from '@/components/Masonry.vue'

const item = ref({
	id: 1,
	manufacturer: 'Уралэлектротяжмаш',
	model: 'ПКВ-220В-1500-200',
	voltage: 220,
	phase: 3,
	polus: 1,
	break: 2,
	typP: 'Электромагнитный',
	typB: 'Масляный',
})

const kkey = ref(0)

const infopanel = ref(false)
const measurepanel = ref(true)
const rand = ref(+randomNumber(0, 13, 0))
</script>

<template lang="pug">
q-page(padding)
	.container
		.hd {{ item.model }}
		.diag
			q-icon.q-mr-sm(name="mdi-alert" size="sm")
			span {{ list[rand].text }}
		q-expansion-item.wh(v-model="infopanel" label="Информация" icon="mdi-information-outline" header-class="head")
			InfoPanel(:item="item")

		q-expansion-item(v-model="measurepanel" label="Измерения" icon="mdi-speedometer" header-class="head")
			template(v-slot:header)
				q-item-section(avatar)
					q-icon(name="mdi-speedometer")
				q-item-section.tit Измерения
			Masonry

	AddMeasure
</template>

<style scoped lang="scss">
:deep(.wh.q-expansion-item--expanded) {
	transition: all .2s;
	background: white;
	margin-top: 1rem;
	margin-bottom: 1rem;
	box-shadow: var(--card-shadow);
	border-radius: var(--radius-md);
}

.tit {
	text-transform: uppercase;
}

:deep(.head) {
	.q-item__label {
		text-transform: uppercase;
	}
}

.q-tab-panels {
	background: transparent;
	min-height: 200px;
}

:deep(.q-table__top) {
	padding: 0;
}

.diag {
	color: darkred;

	span {
		background: pink;
		padding: 3px 8px;
		border-radius: 4px;
		font-size: .8rem;
		border: 1px solid darkred;
	}
}

.hd {
	font-size: 2.125rem;
}
</style>
