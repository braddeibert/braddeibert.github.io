<script>
	import { browser } from '$app/env';
	const homePath = '/';
	const aboutPath = '/about';
	const resumePath = '/resume';
</script>

<div class="container">
	<nav class="nav">
		<a
			class={`nav-item ${browser && window.location.pathname === homePath ? 'active' : ''}`}
			href={homePath}>home</a
		>
		<a
			class={`nav-item ${browser && window.location.pathname === aboutPath ? 'active' : ''}`}
			href={aboutPath}>about</a
		>
		<a
			class={`nav-item ${browser && window.location.pathname === resumePath ? 'active' : ''}`}
			href={resumePath}>resume</a
		>
	</nav>
</div>

<style>
	.container {
		height: min-content;
		width: 100%;
		background-color: #5463ff;
		display: flex;
		justify-content: center;
		flex-direction: row;
	}
	.nav {
		width: 100%;
		max-width: 1200px;
		padding: 16px;
		display: flex;
		justify-content: flex-end;
		gap: 16px;
	}
	.nav-item {
		color: #fff;
		font-size: 24px;
		text-decoration: none;
	}
	.nav-item.active {
		/* color: #ffc300; */
		height: 100%;
		border-bottom: 5px solid #ffc300;
	}
</style>
