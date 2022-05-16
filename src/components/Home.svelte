<script>
	import Section from '../components/layout/Section.svelte';
	import Code from 'svelte-icons/md/MdCode.svelte';
	import LocationPin from 'svelte-icons/fa/FaMapMarkerAlt.svelte';
	import Github from 'svelte-icons/fa/FaGithub.svelte';
	import LinkedIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import Email from 'svelte-icons/fa/FaRegEnvelope.svelte';
	import dialogOptions from './dialogs/dialogOptions';

	import { isDarkMode, dialogName } from '../stores';
	let imageSrc = 'static/IMG_2902.jpg';
</script>

<Section isFullScreen>
	<div class={`card ${$isDarkMode ? 'dark' : ''}`}>
		<div class="content">
			<div>
				<h1>Brad Deibert</h1>
				<div>
					<span class="icon-text">
						<div class="icon">
							<Code />
						</div>
						<h4>Software Engineer</h4>
					</span>
					<span class="icon-text">
						<div class="icon">
							<LocationPin />
						</div>
						<h4>Missoula, MT</h4>
					</span>
				</div>
			</div>

			<div class="card-foot">
				<div>
					<h5
						role="button"
						tabindex="0"
						on:click={() => {
							$dialogName = dialogOptions.about;
						}}
						class="clickable"
					>
						ABOUT
					</h5>
					<h5
						role="button"
						tabindex="0"
						on:click={() => {
							$dialogName = dialogOptions.skills;
						}}
						class="clickable"
					>
						SKILLSET
					</h5>
					<h5
						role="button"
						tabindex="0"
						on:click={() => {
							$dialogName = dialogOptions.resume;
						}}
						class="clickable"
					>
						RESUME
					</h5>
				</div>

				<div class="socials">
					<a class="icon" href="https://github.com/braddeibert" target="_blank">
						<Github />
					</a>
					<a class="icon" href="https://www.linkedin.com/in/bradleydeibert/" target="_blank">
						<LinkedIn />
					</a>
					<a class="icon" href="mailto:bradeibert7@gmail.com">
						<Email />
					</a>
				</div>
			</div>
		</div>

		<img src={imageSrc} alt="Me" loading="lazy" height="600px" class="image" />
	</div>
</Section>

<style>
	.card {
		height: min-content;
		padding: 32px;

		flex-grow: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 32px;

		border: 5px solid #10316b;
		border-radius: 1rem;
		box-shadow: 0.5rem 0.5rem #0b8457;
	}

	.card.dark {
		border: 5px solid #ff1818;
		box-shadow: 0.5rem 0.5rem #ffc300;
	}

	.content {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card-foot {
		display: flex;
		justify-content: space-between;
	}

	.socials {
		display: flex;
		align-items: flex-end;
		gap: 16px;
	}

	.icon-text {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	.icon {
		color: inherit;
		height: 30px;
		width: 30px;
	}

	.clickable {
		cursor: pointer;
	}
</style>
