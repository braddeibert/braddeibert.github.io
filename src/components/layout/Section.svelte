<script>
	export let isFullScreen = false;
</script>

<section class={`section ${isFullScreen ? 'fullscreen' : ''}`}>
	<slot />
</section>

<style>
	.section {
		flex-grow: 1;
		max-width: 1200px;
		min-height: 100vh;
		margin: 0 32px;
	}

	.fullscreen {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
</style>
