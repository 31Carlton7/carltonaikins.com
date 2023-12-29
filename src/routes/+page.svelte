<script>
	import GrainEffect from '$lib/GrainEffect.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import StripePattern from '$lib/StripePattern.svelte';
	import Footer from '$lib/Footer.svelte';
	import Typewriter from 'svelte-typewriter';
	import '../app.css';
	import '@fontsource-variable/dm-sans';
</script>

<Navbar />
<section class="bg-[#25262D] md:h-full overflow-hidden">
	<GrainEffect />
	<StripePattern />
	<main
		class="relative flex flex-col flex-wrap md:h-screen h-[80vh] items-center justify-center place-items-center md:py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12"
	>
		<Typewriter interval={100} unwriteInterval={100} cursor={false} mode="loopOnce">
			<h1 class="font-black text-5xl mb-8">HI! 👋🏾</h1>
			<h1 class="font-black text-5xl text-color3 mb-8">
				I'M <span class="underline text-white">CARLTON AIKINS</span>
			</h1>
		</Typewriter>
		<p class="font-semibold text-color3 text-2xl max-w-4xl">
			I'm a <span class="text-color5">Software Developer</span>,
			<span class="text-color5">Entrepreneur</span>, and <span class="text-color5">Student</span>
			at the <span class="text-color2">University of Southern California 🌴</span> studying Computer
			Science.
		</p>
	</main>
</section>
<footer class="bg-transparent p-10 w-full md:absolute bottom-0 z-[1000]">
	<div class="max-w-screen-xl flex flex-wrap justify-between items-center">
		<div class="social-buttons">
			<a href="https://www.github.com/31carlton7" target="_blank"
				><i class="fa-brands fa-github text-2xl m-4 text-color3" /></a
			>
			<a href="https://www.linkedin.com/in/carltonaikins" target="_blank"
				><i class="fa-brands fa-linkedin text-2xl m-4 text-color3" /></a
			>
			<a href="https://www.instagram.com/31carlton7" target="_blank"
				><i class="fa-brands fa-instagram text-2xl m-4 text-color3" /></a
			>
			<a href="https://www.twitter.com/31carlton7" target="_blank"
				><i class="fa-brands fa-twitter text-2xl m-4 text-color3" /></a
			>
		</div>
		<div class="text-5xl italic font-thin text-color3 select-none" draggable="false">317</div>
	</div>
</footer>
