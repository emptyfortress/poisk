<script setup lang="ts">

const props = defineProps<{
	item: Item
}>()
</script>

<template lang="pug">
.mygrid
	.inf
		.label Производитель:
		.val {{ props.item.manufacturer }}
		.label Модель:
		.val {{ props.item.model }}
		.label Класс напряжения:
		.val {{ props.item.voltage }}
		.label Фазы:
		.val {{ props.item.phase }}
		.label Полюса:
		.val {{ props.item.polus }}
		.label Разрывы на полюс:
		.val {{ props.item.break }}
		.label Тип привода:
		.val {{ props.item.typP }}
		.label Тип ВВ:
		.val {{ props.item.typB }}
	.pic.text-right
		img(src="@/assets/img/image.svg")
</template>

<style scoped lang="scss">
.mygrid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	align-items: center;
	padding: 1rem 3rem;
	border-top: 1px solid #dedede;
}

.inf {
	display: grid;
	grid-template-columns: auto 1fr;
	column-gap: 1rem;
	row-gap: .3rem;
}

.pic {
	img {
		opacity: .2;
		height: 230px;
	}
}
</style>
