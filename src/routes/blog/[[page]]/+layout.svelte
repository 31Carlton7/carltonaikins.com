<script>
	import './../../../app.css';
	import '@fontsource-variable/dm-sans';
	import '../../../prism.css';
	import { page } from '$app/stores';
	import GrainEffect from '$lib/GrainEffect.svelte';
	import StripePattern from '$lib/StripePattern.svelte';
</script>

<StripePattern />
<GrainEffect />
<div class="flex flex-col w-full min-h-screen bg-white">
	<div class="flex flex-col flex-grow w-full px-4 py-2">
		<main class="flex flex-col flex-grow w-full mx-auto md:w-2/3">
			<slot />
		</main>
	</div>
</div>
