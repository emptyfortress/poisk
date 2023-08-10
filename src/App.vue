<script setup lang="ts">
import { ref } from 'vue'
import Drawer from '@/components/Drawer.vue'

const leftDrawer = ref(true)

const toggleLeftDrawer = () => {
	leftDrawer.value = !leftDrawer.value
}

</script>

<template lang="pug">
q-layout(view='hHh LpR fFf')
	q-header.head
		q-toolbar
			q-btn(dense flat round icon='mdi-menu' @click='toggleLeftDrawer')
			q-toolbar-title Сервис поисков и представлений
			q-space
			q-btn(dense flat round icon="mdi-magnify")
			q-btn.q-ml-md(dense round unelevated color="blue-3")
				q-avatar
					img(src="@/assets/img/users/user0.svg")
					.mybadge
			q-btn.q-ml-md(dense flat round icon="mdi-help-circle-outline")

	Drawer(v-model="leftDrawer")

	q-page-container
		router-view(v-slot="{ Component, route }")
			transition(:name="route.meta.transition || 'fade'" mode="out-in")
				component(:is="Component")

</template>

<style scoped lang="scss">
.head {
	color: var(--text-bright);
	background: rgba(0, 0, 0, 0.07);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
</style>
