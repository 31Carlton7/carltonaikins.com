<script lang="ts">
	import Footer from '$lib/Footer.svelte';

	import sections from '$lib/images/sections-banner.png';
	import clubology from '$lib/images/clubology-banner.png';
	import charm from '$lib/images/charm-technologies-banner.png';
	import elisha from '$lib/images/elisha-banner.png';
</script>

<div class="max-w-[1240px] mx-auto max-xl:mx-3 md:mt-0 md:mb-0 mt-12 mb-0 sm:mb-0">
	<div class="flex w-full items-center justify-center">
		<a
			href="https://www.sections.vip"
			target="_blank"
			class="flex items-center justify-center bg-black md:rounded-3xl rounded-xl md:w-[65%] max-md:max-w-none max-md:p-8"
		>
			<img src={sections} alt="sections banner" draggable="false" />
		</a>
	</div>
	<div
		class="grid md:grid-cols-[1fr_1fr] max-md:grid-cols-[1fr] grid-rows-[auto] md:my-8 md:space-x-10 md:space-y-0 space-y-8"
	>
		<div class="flex flex-col w-full md:items-end items-center space-y-8 md:mt-0 mt-8">
			<div
				class="flex items-center justify-center bg-transparent md:rounded-3xl rounded-xl md:w-[65%] max-md:max-w-none"
			>
				<img src={charm} alt="charm technologies banner" />
			</div>
			<a
				href="https://apps.apple.com/lc/app/elisha/id1608063814"
				target="_blank"
				class="flex items-center justify-center bg-transparent md:rounded-3xl rounded-xl md:w-[65%] max-md:max-w-none"
			>
				<img src={elisha} alt="elisha banner" />
			</a>
		</div>
		<a class="flex w-full" href="https://www.clubology.co" target="_blank">
			<div
				class="flex justify-start bg-transparent md:rounded-3xl rounded-xl md:w-[58%] max-md:max-w-none"
			>
				<img src={clubology} alt="sections banner" class="" />
			</div>
		</a>
	</div>
</div>

<Footer pageName="Projects" />
