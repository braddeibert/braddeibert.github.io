<script>
	let src = 'static/IMG_2902.jpg';
</script>

<div class="card">
	<div class="content">
		<div>
			<h1>Brad Deibert</h1>
			<div>
				<p>Software Engineer</p>
				<p>Missoula, MT</p>
			</div>
		</div>

		<div class="card-foot">
			<div>
				<p>ABOUT</p>
				<p>RESUME</p>
				<p>CONTACT</p>
			</div>

			<div class="socials">social icons here</div>
		</div>
	</div>

	<img {src} alt="Me" loading="lazy" height="500px" />
</div>

<style>
	.card {
		height: min-content;
		background-color: black;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 32px;
		padding: 32px;
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
	}
</style>
