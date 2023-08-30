<script setup lang="ts">
</script>

<template>
	<div class="content grid">
		<div class="dog-paragraph">
		</div>
		<article class="doc">
			<h1 class="page">Page Not Found</h1>
			<div class="paragraph">
				<p>Страница, которую вы ищете, не существует. Возможно, она была перемещена, или её съела собака.
				</p>
				<ul>
					<li><button class="box__button" onclick="history.back()">Вернитесь</button> на предыдущую страницу,</li>
					<li><a href="/"><button class="box__button">Откройте</button></a> стартовую страницу,</li>
					<li>Если вы ввели адрес вручную, проверьте адресную строку ещё раз: возможно, вы где-то ошиблись.</li>
				</ul>
				<p></p>
			</div>
		</article>
	</div>
</template>

<style scoped lang="scss">
.dog-paragraph {
	height: 50px;
	background: #ccc;
}

.grid {
	display: grid;
	grid-template-columns: 350px 1fr;
	align-items: center;
}
</style>
