<script>
	import Navbar from './Navbar.svelte';

	export let pageTitle;
</script>

<Navbar />
<main class="main">
	<h1>{pageTitle}</h1>
	<slot />
</main>

<style>
	.main {
		height: 100%;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		color: #abb2bf;
		background-color: #4b5263;
		padding: 32px;
	}
</style>
