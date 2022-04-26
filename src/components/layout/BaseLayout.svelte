<script>
	import Navbar from './Navbar.svelte';

	export let pageTitle;
</script>

<Navbar />
<main>
	<h1>{pageTitle}</h1>
	<slot />
</main>
