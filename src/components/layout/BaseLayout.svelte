<script>
	// import Navbar from './Navbar.svelte';
</script>

<!-- <Navbar /> -->
<main class="main">
	<section class="section">
		<slot />
	</section>
</main>

<style>
	.main {
		height: 100%;
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #000;
	}

	.section {
		width: 100%;
		max-width: 1200px;
	}
</style>
