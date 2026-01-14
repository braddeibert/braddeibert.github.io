<script>
	import { isDarkMode } from '../stores';
</script>

<div class={`icon ${$isDarkMode ? 'dark' : ''}`}>
	<slot />
</div>

<style>
        .icon {
                height: 30px;
                width: 30px;
                color: var(--accent-color);
        }
</style>
