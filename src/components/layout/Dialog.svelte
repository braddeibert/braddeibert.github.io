<script>
	import { dialogName, isDarkMode } from '../../stores';
	import AboutDialog from '../dialogs/AboutDialog.svelte';
	import dialogOptions from '../dialogs/dialogOptions';
	import ResumeDialog from '../dialogs/ResumeDialog.svelte';
	import SkillsDialog from '../dialogs/SkillsDialog.svelte';

	const handleClick = () => {
		$dialogName = null;
	};
</script>

{#if dialogOptions[$dialogName]}
	<div class="dialog-root">
		<div class={`dialog-body ${$isDarkMode ? 'dark' : ''}`}>
			<button class="close" on:click={handleClick}>Close</button>
			{#if $dialogName === dialogOptions.about}
				<AboutDialog />
			{:else if $dialogName === dialogOptions.skills}
				<SkillsDialog />
			{:else if $dialogName === dialogOptions.resume}
				<ResumeDialog />
			{/if}
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
                background-color: var(--bg-color);
                color: var(--text-color);

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
                background-color: var(--bg-color);
                color: var(--text-color);
        }

	.close {
		position: absolute;
		font-size: 16px;
		text-decoration: underline;
		cursor: pointer;
		color: unset;
		background-color: unset;
		border: none;
		align-self: flex-end;
	}
</style>
