<script>
	import ThemeToggle from '../ThemeToggle.svelte';
</script>

<ThemeToggle />
<main class="main">
	<slot />
</main>

<style>
	.main {
		display: grid;
		/* grid-template-rows: repeat(3, %); */
		grid-gap: 32px;

		width: 100%;
		max-width: 1200px;
		margin: 0 32px;
	}
</style>
