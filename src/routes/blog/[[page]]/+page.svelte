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

<div class="relative flex flex-col items-center justify-center flex-grow mt-32">
	<a href="/" class="">
		<img
			class="select-none pointer-events-none w-[4rem]"
			src={pfp}
			alt="Carlton Aikins Profile"
			draggable="false"
		/>
	</a>
	<h1 class="my-4 text-2xl tracking-tight md:text-5xl">Welcome to my Blog</h1>
	<h5 class="text-[#A2A2A2] font-light">Here are all my latest write ups.</h5>
	<div class="w-full md:w-[60%] md:flex md:items-center md:justify-center">
		<Navbar />
	</div>
	<PostsList posts={data.posts} />
	<div class="flex items-center justify-between pt-16 pb-8">
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
