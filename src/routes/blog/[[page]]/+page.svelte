<script lang="ts">
	import { name } from '$lib/info.ts';
	import ArrowLeftIcon from '$lib/blog_components/ArrowLeftIcon.svelte';
	import ArrowRightIcon from '$lib/blog_components/ArrowRightIcon.svelte';
	import PostsList from '$lib/blog_components/PostsList.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import pfp from '$lib/images/pfp.png';

	/** @type {import('./../$types').PageData} */
	export let data: any;

	$: isFirstPage = data.page === 1;
	$: hasNextPage = data.posts[data.posts.length - 1]?.previous;
</script>

<svelte:head>
	<title>{name} | Posts</title>
</svelte:head>

<div class="flex relative flex-col flex-grow justify-center items-center mt-32">
	<a href="/" class="">
		<img
			class="select-none pointer-events-none w-[3rem] rounded-xl"
			src={pfp}
			alt="Carlton Aikins Profile"
			draggable="false"
		/>
	</a>
	<h1 class="my-4 text-2xl tracking-tight md:text-3xl">my writing</h1>
	<h5 class="text-[#A2A2A2] font-light">don't critique it too hard</h5>
	<div class="w-full md:w-[60%] md:flex md:items-center md:justify-center">
		<Navbar />
	</div>
	<PostsList posts={data.posts} />
	<div class="flex justify-between items-center pt-16 pb-8">
		{#if !isFirstPage}
			<a href={`/blog/post/${data.page - 1}`} data-sveltekit-prefetch>
				<ArrowLeftIcon class="w-4 h-4" />
				Previous
			</a>
		{:else}
			<div />
		{/if}

		{#if hasNextPage}
			<a href={`/blog/post/${data.page + 1}`} data-sveltekit-prefetch
				>Next
				<ArrowRightIcon class="w-4 h-4" />
			</a>
		{/if}
	</div>
</div>
