<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { fields, conditions, values, man, org } from '@/stores/select'
import { useEditor } from '@/stores/editor'

const props = defineProps<{
	stat: Stat
}>()

const editor = useEditor()

const isMan = (el: string) => el == 'man'
const isDate = (el: string) => el == 'date'
const calcSecond = computed(() => {
	if (props.stat.data.text1.type == 1) {
		return conditions.filter((e: any) => e.kind.some(isMan))
	}
	if (props.stat.data.text1.type === 2) {
		return conditions.filter((e: any) => e.kind.some(isDate))
	}
	return conditions
})
const options3 = ref(values)

const next = (e: Stat) => {
	e.data.typ = !e.data.typ
}

const toggle = (stat: any) => {
	stat.open = !stat.open
}
const clear = () => {
	emit('clear')
}

const enable = () => {
	props.stat.data.restrict = false
}
const attribute = ref(props.stat.data.attribute)

const emit = defineEmits(['addCollection', 'removeCollection', 'clear', 'kill', 'addCond', 'addOp'])

watch(attribute, (val) => {
	if (val == true) {
		props.stat.droppable = true
		emit('addCollection', { stat: props.stat, text: props.stat.data.text1 })
	} else {
		props.stat.droppable = false
		emit('removeCollection')
	}
})

const addAttr = computed(() => {
	if (props.stat.data.text1.type == 1 || props.stat.data.text1.type === 3) {
		return 'attr'
	}
	if (props.stat.data.text1.type == 5) {
		return 'attr1'
	}
	return ''
})

watch(
	() => props.stat.data.text1,
	() => {
		if (props.stat.data.text1.type === 1 || props.stat.data.text1.type === 3) {
			calcAttribute.value = true
		} else calcAttribute.value = false
		if (props.stat.data.text1.type === 5) {
			calcRukovoditel.value = true
		} else calcRukovoditel.value = false
	},
	{ deep: true }
)
const calcAttribute = ref(false)
const calcRukovoditel = ref(false)
const calcFirst = computed(() => {
	if (props.stat.parent.level == 1) {
		return editor.calcFirst
	} else if (props.stat.parent.data.type === 0) {
		return fields
	} else if (props.stat.parent.data.text1.type === 1) {
		return man
	} else if (props.stat.parent.data.text1.type === 3) {
		return org
	}
})
const inp = ref('')
const rukovoditel = ref('yes')
</script>

<template lang="pug">
.node(:class="{ dis: props.stat.data.restrict === true }")
	.zero(v-if="props.stat.data.type === 0")
		q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
		.icon(:class="{ or: props.stat.data.typ === true }" @click.stop="next(props.stat)")
		.q-ml-md Оператор
		.text-weight-bold.q-ml-sm {{ props.stat.data.typ == true ? 'ИЛИ' : 'И' }}
		.grow
		q-btn(flat round icon="mdi-close"  @click="$emit('kill')" size="sm" v-if="props.stat.data.drag !== false") 

	.one(v-if="props.stat.data.type === 1")
		.handle

		q-select(v-model="props.stat.data.text1" :options="calcFirst" outlined label="Поле" dense bg-color="white")
			template( v-slot:option="scope" )
				q-item.item(v-bind="scope.itemProps")
					q-item-section
						q-item-label {{ scope.opt.label }}
					q-item-section(avatar)
						q-btn(flat dense round icon="mdi-arrow-right" color="primary" @click="action") 

		.row(v-if="calcRukovoditel")
			q-radio(v-model="rukovoditel" val="yes" label="Да")
			q-radio(v-model="rukovoditel" val="no" label="Нет")
		template(v-if="!calcRukovoditel")
			q-select(v-model="props.stat.data.text2" :options="calcSecond" outlined label="Условие" dense bg-color="white")
			q-input(v-if="props.stat.data.text1.type == 4" dense v-model="inp" outlined bg-color="white" placeholder="Значение")
			q-select(v-else v-model="props.stat.data.text3" :options="options3"  outlined label="Значение" dense bg-color="white")
				template(v-slot:prepend v-if="props.stat.data.text1.type == 2")
					q-icon(name="mdi-calendar")
				template(v-slot:prepend v-if="props.stat.data.text1.type == 1 || props.stat.data.text1.type == 3")
					q-icon(name="mdi-book-open-page-variant-outline")
		template(v-if="calcRukovoditel")
			div
			div
		q-btn(flat round icon="mdi-close" @click="$emit('kill')" size="sm") 
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
	grid-template-columns: 1fr 1fr 1fr auto;
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
	&.attr1 {
		grid-template-columns: 2fr 200px 1fr 1fr 92px;
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
	width: 0.7rem;
	height: 100%;
	left: 0;
	top: 0;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAClJREFUGFclysENwEAQg0Cm/6Idbe6DEDbZpFWKaie7tqDd+sj/eR7rA9inDgnK6GXhAAAAAElFTkSuQmCC)
		repeat;
}
.rowbt {
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	.q-btn {
		height: 30px;
	}
}
:deep(.q-item__section--avatar) {
	min-width: 0;
}
.grow {
	flex-grow: 1;
}
.item {
	padding-right: 0;
}
</style>
