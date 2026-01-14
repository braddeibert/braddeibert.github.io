<script>
	import { onMount, beforeUpdate } from 'svelte';
	import { isDarkMode } from '../stores';

	onMount(async () => {
		const doesUserPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		$isDarkMode = doesUserPreferDark;
	});

	beforeUpdate(() => {
		if ($isDarkMode) {
			document.querySelector('body').classList.add('dark');
		} else {
			document.querySelector('body').classList.remove('dark');
		}
	});
</script>

<label class={`theme-toggle ${$isDarkMode ? 'dark' : ''}`}>
	Dark mode?
	<input id="theme-toggle" type="checkbox" bind:checked={$isDarkMode} />
</label>

<style>
        .theme-toggle {
                position: sticky;
                top: 25px;
                left: calc(100% - 165px);

                color: var(--text-color);
                background-color: var(--bg-color);
                outline: 2px solid var(--border-color);

                display: flex;
                align-items: center;
                gap: 4px;

                width: max-content;
                padding: 16px;
                border-radius: 2rem;
        }

        .theme-toggle.dark {
                color: var(--text-color);
                outline: 2px solid var(--border-color);
        }
</style>
