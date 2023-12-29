<script>
	import GrainEffect from '$lib/GrainEffect.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import StripePattern from '$lib/StripePattern.svelte';
	import './../../app.css';
	import '@fontsource-variable/dm-sans';
</script>

<section class="bg-[#25262D]">
	<GrainEffect />
	<StripePattern />
	<Navbar />
	<main
		class="relative flex flex-col flex-wrap items-center justify-center place-items-center py-8 px-4 mx-auto max-w-screen-xl text-center md:pt-32 md:px-12"
	>
		<slot />
	</main>
</section>
