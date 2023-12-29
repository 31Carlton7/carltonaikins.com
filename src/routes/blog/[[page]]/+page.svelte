<script lang="ts">
	import { name } from '$lib/info.ts';
	import ArrowLeftIcon from '$lib/blog_components/ArrowLeftIcon.svelte';
	import ArrowRightIcon from '$lib/blog_components/ArrowRightIcon.svelte';
	import PostsList from '$lib/blog_components/PostsList.svelte';
	import Footer from '$lib/Footer.svelte';

	/** @type {import('./../$types').PageData} */
	export let data: any;

	$: isFirstPage = data.page === 1;
	$: hasNextPage = data.posts[data.posts.length - 1]?.previous;
</script>

<svelte:head>
	<title>{name} | Posts</title>
</svelte:head>

<div class="flex flex-col flex-grow items-center mt-32">
	<h1 class="text-2xl font-bold tracking-tight">
		Writing on tech, business, and whatever else I feel like
	</h1>

	<div class="mt-16">
		<PostsList posts={data.posts} />
	</div>
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

	<footer class="bg-transparent py-10 w-full z-[1000]">
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
			<div class="flex flex-row justify-center items-center">
				<a
					href="https://www.carltonaikins.com/rss.xml"
					target="_blank"
					class="block py-2 pl-3 pr-4 md:border-0 md:p-0 mx-4"
				>
					<div
						class="border rounded-full px-4 py-2 text-white hover:text-color4 border-color3 hover:bg-color3 transition ease-in-out"
					>
						RSS
					</div>
				</a>
				<div class="text-5xl italic font-thin text-color3">Blog</div>
			</div>
		</div>
	</footer>
</div>
