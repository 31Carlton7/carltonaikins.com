<div class="noise" />

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.noise::before {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		content: '';
		opacity: 0.03;
		/* z-index: 2000; */
		pointer-events: none;
		background-image: url($lib/images/noise.gif);
	}
</style>
