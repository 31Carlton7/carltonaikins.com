<script>
	import './../../../app.css';
	import '@fontsource-variable/dm-sans';
	import '../../../prism.css';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import GrainEffect from '$lib/GrainEffect.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import StripePattern from '$lib/StripePattern.svelte';

	let isDarkMode = browser ? Boolean(document.documentElement.classList.contains('dark')) : true;

	// function disableTransitionsTemporarily() {
	// 	document.documentElement.classList.add('[&_*]:!transition-none');
	// 	window.setTimeout(() => {
	// 		document.documentElement.classList.remove('[&_*]:!transition-none');
	// 	}, 0);
	// }
</script>

<div class="bg-[#25262D] flex flex-col min-h-screen">
	<GrainEffect />
	<StripePattern />
	<Navbar />
	<div class="flex flex-col flex-grow w-full px-4 py-2">
		<main
			class="flex flex-col flex-grow w-full mx-auto"
			class:max-w-2xl={!$page.data.layout?.fullWidth}
		>
			<slot />
		</main>
	</div>
</div>
