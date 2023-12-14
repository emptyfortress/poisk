<script setup lang="ts">
import { ref, computed } from 'vue'
import { conditions, values } from '@/stores/select'

const props = defineProps<{
	stat: Stat
}>()

const isMan = (el: string) => el == 'man'
const isDate = (el: string) => el == 'date'
const isAll = (el: string) => el == 'all'

const calcSecond = computed(() => {
	if (props.stat.data.man) {
		return conditions.filter((e: any) => e.kind.some(isMan))
	}
	if (props.stat.data.date) {
		return conditions.filter((e: any) => e.kind.some(isDate))
	}
	return conditions.filter((e: any) => e.kind.some(isAll))
})
const options3 = ref(values)

const next = (e: Stat) => {
	e.data.typ = !e.data.typ
}

const toggle = (stat: any) => {
	stat.open = !stat.open
}

const emit = defineEmits(['kill', 'duble'])

const inp = ref('')
const rukovoditel = ref('yes')
const vis = ref(true)

const req = [(val: string) => (val && val.length > 0) || 'Это обязательное поле']
const myform = ref()
const toggleVis = () => {
	vis.value = !vis.value
	vis.value ? myform.value.resetValidation() : myform.value.validate()
}
const text = computed(() => {
	if (
		props.stat.data.text == 'Тема' ||
		props.stat.data.text == 'Содержание' ||
		props.stat.data.text == 'Номер'
	) {
		return true
	}
	return false
})
</script>

<template lang="pug">
.node(:class="{ dis: props.stat.data.restrict === true }")
	.zero(v-if="props.stat.data.type === 0")
		q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
		.icon(:class="{ or: props.stat.data.typ === true }" @click.stop="next(props.stat)")
		.q-ml-md Оператор
		.text-weight-bold.q-ml-sm {{ props.stat.data.typ == true ? 'ИЛИ' : 'И' }}

	q-form.one(v-if="props.stat.data.type === 1" ref="myform" no-error-focus)
		div
			template(v-for="item in props.stat.data.parent" :key="item")
				span.text-weight-bold {{ item }}
				span.q-mx-sm >
			span.text-weight-bold {{ props.stat.data.text}}

		template(v-if="props.stat.data.ruk")
			.row(v-if="props.stat.data.ruk")
				q-radio(v-model="rukovoditel" val="yes" label="Да")
				q-radio(v-model="rukovoditel" val="no" label="Нет")
		template(v-else )
			q-select(v-model="props.stat.data.text2" :options="calcSecond" label="Условие" dense )
			q-input(v-if="text" dense v-model="inp" outlined bg-color="white" placeholder="Значение" lazy-rules="ondemand" :rules="req" hide-bottom-space)
			q-select(v-else v-model="props.stat.data.text3" :options="options3"  outlined label="Значение" dense bg-color="white" lazy-rules="ondemand" :rules="req" hide-bottom-space)
				template(v-slot:prepend v-if="props.stat.data.date")
					q-icon(name="mdi-calendar")
				template(v-slot:prepend v-if="props.stat.data.man")
					q-icon(name="mdi-book-open-page-variant-outline")
		q-btn.eye(flat round @click="toggleVis" size="md")
			q-icon(name="mdi-eye" v-if="vis") 
			q-icon(name="mdi-eye-off" v-else) 

	.but
		q-btn.close(flat round icon="mdi-close" @click="$emit('kill')" size="sm")
		q-btn.dub(flat round icon="mdi-plus-circle-multiple-outline" @click="$emit('duble')" size="sm")
</template>

<style scoped lang="scss">
.node {
	cursor: pointer;
	position: relative;

	img {
		width: 42px;
		margin-right: 1rem;
	}

	.eye {
		position: absolute;
		left: -1.8rem;
		top: 0.5rem;
	}
	.dub {
		position: absolute;
		right: 0.1rem;
		top: 2rem;
	}
	.close {
		position: absolute;
		right: 0.1rem;
		top: 0.2rem;
	}
	.but {
		display: none;
	}
	&:hover {
		.but {
			display: block;
		}
	}
}

.restrict {
	position: absolute;
	top: 50%;
	left: -1rem;
	transform: translateY(-50%);
	display: none;
}

.zero {
	display: flex;
	align-items: center;
	background: transparent;
	padding: 0.5rem;
	margin-bottom: 4px;
	background: var(--bg-head);
	border: 1px solid #ccc;
	border-radius: 4px;
	height: 58px;

	&:hover {
		border-color: $primary;
	}
}

.one {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 25px;
	align-items: center;
	background: var(--bg-head);
	padding: 0.5rem;
	padding-left: 1.3rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-bottom: 4px;
	gap: 0.5rem;
	position: relative;
	&:hover {
		border-color: $primary;
	}
}

.trig {
	font-size: 1.3rem;
	margin-right: 0.5rem;
	transition: 0.2s ease all;

	&.closed {
		transform: rotate(-90deg);
	}
}

.icon {
	width: 49px;
	height: 36px;
	background-image: url('@/assets/img/andor.svg');
	transition: 0.2s ease-out all;
	background-position: top left;
	cursor: pointer;

	&.or {
		background-position: bottom left;
	}
}
:deep(.q-field--error .q-field__bottom) {
	display: none;
}
</style>
