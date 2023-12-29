<script>
	import GrainEffect from '$lib/GrainEffect.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import StripePattern from '$lib/StripePattern.svelte';
	import './../../app.css';
	import '@fontsource-variable/dm-sans';
</script>

<section class="bg-[#25262D] h-full md:overflow-hidden">
	<GrainEffect />
	<StripePattern />
	<Navbar />
	<main
		class="relative flex flex-col md:h-screen items-center justify-center place-items-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12"
	>
		<slot />
	</main>
</section>
