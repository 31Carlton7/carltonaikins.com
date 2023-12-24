<script>
	import GrainEffect from '$lib/GrainEffect.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import StripePattern from '$lib/StripePattern.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	import '@fontsource-variable/dm-sans';
</script>

<section class="bg-[#25262D] h-full overflow-hidden">
	<GrainEffect />
	<StripePattern />
	<Navbar />
	<main
		class="relative flex flex-col h-screen items-center justify-center place-items-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12"
	>
		<h1 class="font-black text-5xl text-color3 mb-8">
			HI 👋🏾, I'M <span class="underline text-white">CARLTON AIKINS</span>
		</h1>
		<p class="font-semibold text-color3 text-2xl max-w-4xl">
			I'm a <span class="text-color1">Software Developer</span>,
			<span class="text-color1">Entrepreneur</span>, and <span class="text-color1">Freshman</span>
			at the <span class="text-color2">University of Southern California🌴</span> studying Computer Science
			and Business.
		</p>
	</main>
	<Footer pageName="317" />
</section>
