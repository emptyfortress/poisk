<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { conditions, values } from '@/stores/select'
import { useEditor } from '@/stores/editor'

const props = defineProps<{
	stat: Stat
}>()

const editor = useEditor()

const isMan = (el: string) => el == 'man'
const isDate = (el: string) => el == 'date'
const calcSecond = computed(() => {
	if (!!text1.value && text1.value.type === 1) {
		return conditions.filter((e: any) => e.kind.some(isMan))
	}
	if (!!text1.value && text1.value.type === 2) {
		return conditions.filter((e: any) => e.kind.some(isDate))
	}
	return conditions
})
const options3 = ref(values)

const next = (e: Stat) => {
	if (e.data.typ === 1) {
		e.data.typ = 0
	} else e.data.typ = e.data.typ + 1
}

const toggle = (stat: any) => {
	stat.open = !stat.open
}
const clear = () => {
	text1.value = null
	text2.value = null
	text3.value = ''
}

const enable = () => {
	props.stat.data.restrict = false
}
const attribute = ref(props.stat.data.drop)

const emit = defineEmits(['addCollection', 'removeCollection'])

watch(attribute, (val) => {
	if (val == true) {
		props.stat.droppable = true
		emit('addCollection', { stat: props.stat, text: text1.value })
	} else {
		props.stat.droppable = false
		emit('removeCollection')
	}
})

const addAttr = computed(() => {
	if (text1.value?.type == 1) {
		return 'attr'
	}
	return ''
})
interface MySel {
	type: number
	kind: String[]
	value: string | null
	label: string | null
}
const text1 = ref<MySel | null>(null)
const text2 = ref<MySel | null>(null)
const text3 = ref('')

watch(text1, (val) => {
	if (val) {
		text2.value = null
	}
})
</script>

<template lang="pug">
.node(:class="{ dis: props.stat.data.restrict === true }" )
	.zero(v-if="props.stat.data.type === 0")
		q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
		.icon(:class="{ or: props.stat.data.typ === 1 }" @click.stop="next(props.stat)")
		.q-ml-md Оператор
		.text-weight-bold.q-ml-sm {{ props.stat.data.typ === 1 ? 'ИЛИ' : 'И' }}
	.one(v-if="props.stat.data.type === 1" :class="addAttr")
		.handle
		q-select(v-model="text1" :options="editor.calcFirst(props.stat)" outlined label="Поле" dense bg-color="white")
		q-checkbox(v-model="attribute" label="Атрибуты" dense v-if="text1?.type == 1")
		q-select(v-model="text2" :options="calcSecond" outlined label="Условие" dense bg-color="white" v-if="!attribute")
		div(v-else)
		q-select(v-model="text3" :options="options3"  outlined label="Значение" dense bg-color="white" v-if="!attribute")
			template(v-slot:prepend v-if="text1?.type == 2")
				q-icon(name="mdi-calendar")
			template(v-slot:prepend v-if="text1?.type == 1")
				q-icon(name="mdi-book-open-page-variant-outline")
		div(v-else)
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

		.one,
		.zero {
			border: 1px solid red;
			background: #fae4e8;
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

	&:hover {
		border-color: $primary;
	}
}

.one {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 42px;
	align-items: top;
	background: var(--bg-head);
	padding: 0.5rem;
	padding-left: 2rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-bottom: 4px;
	gap: 0.5rem;
	position: relative;

	&:hover {
		border-color: $primary;
	}
	&.attr {
		grid-template-columns: 1fr 120px 1fr 1fr 42px;
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
	width: 1rem;
	height: 100%;
	left: 0;
	top: 0;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAClJREFUGFclysENwEAQg0Cm/6Idbe6DEDbZpFWKaie7tqDd+sj/eR7rA9inDgnK6GXhAAAAAElFTkSuQmCC)
		repeat;
}
</style>
