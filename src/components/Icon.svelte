<script>
	import { isDarkMode } from '../stores';
</script>

<div class={`icon ${$isDarkMode ? 'dark' : ''}`}>
	<slot />
</div>

<style>
	.icon {
		/* color: #161616; */
		height: 30px;
		width: 30px;
	}

	/* .icon.dark {
		color: #ececec;
	} */
</style>
