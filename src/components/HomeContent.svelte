<script>
	import Code from 'svelte-icons/md/MdCode.svelte';
	import LocationPin from 'svelte-icons/fa/FaMapMarkerAlt.svelte';
	import Github from 'svelte-icons/fa/FaGithub.svelte';
	import LinkedIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import Email from 'svelte-icons/fa/FaRegEnvelope.svelte';

	let src = 'static/IMG_2902.jpg';
</script>

<div class="card">
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
				<h5>ABOUT</h5>
				<h5>SKILLSET</h5>
				<h5>PROFESSIONAL RESUME</h5>
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

	<img {src} alt="Me" loading="lazy" height="500px" />
</div>

<style>
	.card {
		background-color: #161616;

		height: min-content;
		padding: 32px;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 32px;

		border: 5px solid #ff1818;
		border-radius: 1rem;
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
		color: #ececec;
		height: 30px;
		width: 30px;
	}

	a.icon:hover {
		color: #5463ff;
	}
</style>
