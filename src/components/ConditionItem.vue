<script setup lang="ts">
import { ref } from 'vue'
import { fields, conditions, values, names } from '@/stores/select.js'

const props = defineProps<{
	stat: Stat
}>()

const pole = ref('')
const cond = ref('')
const val = ref('')

const options1 = ref(fields)
const options2 = ref(conditions)
const options3 = ref(values)

const next = (e: Stat) => {
	if (e.data.typ === 1) {
		e.data.typ = 0
	} else e.data.typ = e.data.typ + 1
}

const toggle = (stat: any) => {
	stat.open = !stat.open
}
const clear = (() => {
	props.stat.data.text = ''
	props.stat.data.text1 = ''
	props.stat.data.text2 = ''
})

const enable = (() => {
	props.stat.data.restrict = false
})

</script>

<template lang="pug">
.node(:class="{ dis : props.stat.data.restrict === true}" )
	.zero(v-if="props.stat.data.type === 0")
		q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
		.icon(:class="{ or: props.stat.data.typ === 1 }" @click.stop="next(props.stat)")
		.q-ml-md Оператор
		.text-weight-bold.q-ml-sm {{ props.stat.data.typ === 1 ? 'ИЛИ' : 'И' }}
	.one(v-if="props.stat.data.type === 1")
		.handle
		q-select(v-model="props.stat.data.text" :options="options1" outlined label="Поле" dense bg-color="white")
		q-select(v-model="props.stat.data.text1" :options="options2" outlined label="Условие" dense bg-color="white")
		q-select(v-model="props.stat.data.text2" :options="options3"  outlined label="Значение" dense bg-color="white")
		q-btn(flat round icon="mdi-reload" @click="clear" ) 
	q-icon.restrict(name="mdi-minus-circle" color="red" size="sm" @click="enable")
</template>

<style scoped lang="scss">
.node {
	cursor: pointer;
	position: relative;

	img {
		width: 42px;
		margin-right: 1rem;
	}
	&.dis {
		.restrict {
			display: block;
		}
		.one, .zero {
			border: 1px solid red;
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
	padding: .5rem;
	margin-bottom: 4px;
	background: var(--bg-panel);
	border: 1px solid #ccc;

	&:hover {
		background: var(--bg-panel);
		border-color: $primary;
	}
}

.one {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 42px;
	align-items: center;
	background: var(--bg-panel);
	padding: .5rem;
	padding-left: 3rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-bottom: 4px;
	gap: .5rem;
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

.handle {
	position: absolute;
	width: 2rem;
	height: 100%;
	left: 0;
	top: 0;
	color: red;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAClJREFUGFclysENwEAQg0Cm/6Idbe6DEDbZpFWKaie7tqDd+sj/eR7rA9inDgnK6GXhAAAAAElFTkSuQmCC
) repeat;
}
</style>
