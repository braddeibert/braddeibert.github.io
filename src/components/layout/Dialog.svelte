<script>
	import Minus from 'svelte-icons/fa/FaMinus.svelte';
	import { isDialogOpen, isDarkMode } from '../../stores';

	const handleClick = () => {
		$isDialogOpen = false;
	};
</script>

{#if $isDialogOpen}
	<div class="dialog-root">
		<div class={`dialog-body ${$isDarkMode ? 'dark' : ''}`}>
			<button class="close" on:click={handleClick}>Close</button>
			<slot />
		</div>
	</div>
{/if}

<style>
	.dialog-root {
		height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, 0.75);

		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		top: 0;
		left: 0;
	}

	.dialog-body {
		background-color: #ececec;
		color: inherit;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 16px;

		min-height: 400px;
		width: 600px;
		padding: 32px;
		border-radius: 0.5rem;
	}

	.dialog-body.dark {
		color: #ececec;
		background-color: #161616;
	}

	.close {
		font-size: 16px;
		text-decoration: underline;
		cursor: pointer;
		color: unset;
		background-color: unset;
		border: none;
		align-self: flex-end;
	}
</style>
