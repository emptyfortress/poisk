<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
	stat: Stat
}>()

const pole = ref('test')
const next = (e: Stat) => {
	if (e.data.typ === 1) {
		e.data.typ = 0
	} else e.data.typ = e.data.typ + 1
}

const toggle = (stat: any) => {
	stat.open = !stat.open
}

</script>

<template lang="pug">
.node
	.zero(v-if="props.stat.data.type === 0")
		q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
		.icon(:class="{ or: props.stat.data.typ === 1 }" @click.stop="next(props.stat)")
		.q-ml-md Оператор
		.text-weight-bold.q-ml-sm {{ props.stat.data.typ === 1 ? 'ИЛИ' : 'И' }}
	.one(v-if="props.stat.data.type === 1")
		.handle
		.row.q-gutter-sm
			q-input(v-model="pole" outlined label="Поле" dense bg-color="white")
			q-input(v-model="pole" outlined label="Поле" dense bg-color="white")
			q-input(v-model="pole" outlined label="Поле" dense bg-color="white")
</template>

<style scoped lang="scss">
.node {
	cursor: pointer;

	img {
		width: 42px;
		margin-right: 1rem;
	}
}

.zero {
	display: flex;
	align-items: center;
	background: transparent;
	padding: .5rem;
	margin-bottom: 4px;
	border: 1px solid transparent;

	&:hover {
		background: var(--bg-panel);
		border-color: $primary;
	}
}

.one {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--bg-panel);
	padding: .5rem 1rem;
	padding-left: 3rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-bottom: 4px;
	gap: 1rem;
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
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAClJREFUGFclysENwEAQg0Cm/6Idbe6DEDbZpFWKaie7tqDd+sj/eR7rA9inDgnK6GXhAAAAAElFTkSuQmCC
) repeat;
}
</style>
