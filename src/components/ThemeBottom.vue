<script setup lang="ts">
import { ref } from 'vue'

const style = ref('item1')
</script>

<template lang="pug">
.text-body.text-center Выберите тему оформления:
q-list.myrow
	q-item.tema(tag="label" v-ripple)
		img(src="@/assets/img/frame1.png")
		q-radio(v-model="style" val="item1")
		.text-body2 Dark matter
	q-item.tema(tag="label" v-ripple)
		img(src="@/assets/img/frame2.png")
		q-radio(v-model="style" val="item2")
		.text-body2 Mexico
	q-item.tema(tag="label" v-ripple)
		img(src="@/assets/img/frame3.png")
		q-radio(v-model="style" val="item3")
		.text-body2 Grey hound
	q-item.tema(tag="label" v-ripple)
		img(src="@/assets/img/frame4.png")
		q-radio(v-model="style" val="item4")
		.text-body2 Sunny
	q-item.tema(tag="label" v-ripple)
		img(src="@/assets/img/frame5.png")
		q-radio(v-model="style" val="item5")
		.text-body2 Rain
</template>

<style scoped lang="scss">
.myrow {
	margin: 0 auto;
	display: flex;
	justify-items: center;
	justify-content: center;
}
.tema {
	// border: 1px solid #ccc;
	display: flex;
	justify-items: center;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}
img {
	display: block;
}
:deep(.q-item) {
	// width: 200px;
}
</style>
