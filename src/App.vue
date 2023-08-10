<script setup lang="ts">
import { ref } from 'vue'
import Drawer from '@/components/Drawer.vue'
import RDrawer from '@/components/RDrawer.vue'
import { useStore } from '@/stores/store'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useStore()
const leftDrawer = ref(true)
const rightDrawer = ref(false)

const toggleLeftDrawer = () => {
	leftDrawer.value = !leftDrawer.value
}

const toggleRightDrawer = () => {
	rightDrawer.value = !rightDrawer.value
}

const showDialog = (() => {
	if (route.name === 'switches') {
		store.toggleSwitchDialog()
	} else if (route.name === 'item') {
		store.toggleMeasureDialog()
	}
})
</script>

<template lang="pug">
q-layout(view='hHh LpR fFf')
	q-header.head
		q-toolbar
			q-btn(dense flat round icon='mdi-menu' @click='toggleLeftDrawer')
			img(src="@/assets/img/twin.svg")
			q-toolbar-title Цифровой двойник
			q-btn(dense flat round icon='mdi-menu' @click='toggleRightDrawer')

	Drawer(v-model="leftDrawer")
	RDrawer(v-model="rightDrawer")

	q-page-container
		router-view(v-slot="{ Component, route }")
			transition(:name="route.meta.transition || 'fade'" mode="out-in")
				component(:is="Component")

	q-btn.fab(v-if="route.path !== '/'" fab color="primary" icon="mdi-plus" @click="showDialog") 
</template>

<style scoped lang="scss">
.head {
	color: var(--text-bright);
	background: rgba(0, 0, 0, 0.07);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);

	img {
		margin-left: 2rem;
		width: 32px;
	}
}
</style>
