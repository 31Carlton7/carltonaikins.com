<script>
	import './../../../../app.css';
	import '@fontsource-variable/dm-sans';

	import { website, name, bio, avatar } from '$lib/info.ts';
	import ToC from '$lib/blog_components/ToC.svelte';
	import ArrowLeftIcon from '$lib/blog_components/ArrowLeftIcon.svelte';
	import SocialLinks from '$lib/blog_components/SocialLinks.svelte';
	import { afterNavigate } from '$app/navigation';
	import PostDate from '$lib/blog_components/PostDate.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import StripePattern from '$lib/StripePattern.svelte';
	import GrainEffect from '$lib/GrainEffect.svelte';
	import Footer from '$lib/Footer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// generated open-graph image for sharing on social media.
	// see https://og-image.vercel.app/ for more options.
	const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
		data.post.title
	)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`;

	const url = `${website}/${data.post.slug}`;

	// if we came from /posts, we will use history to go back to preserve
	// posts pagination
	let canGoBack = false;
	afterNavigate(({ from }) => {
		if (from && from.url.pathname.startsWith('/posts')) {
			canGoBack = true;
		}
	});

	function goBack() {
		if (canGoBack) {
			history.back();
		}
	}
</script>

<svelte:head>
	<title>{data.post.title} - {name}</title>
	<meta name="description" content={data.post.preview.text} />
	<meta name="author" content={name} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={data.post.title} />
	<meta property="og:description" content={data.post.preview.text} />
	<meta property="og:image" content={ogImage} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={website} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={data.post.title} />
	<meta name="twitter:description" content={data.post.preview.text} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<GrainEffect />
<Navbar />
<div class="h-full overflow-hidden">
	<StripePattern />
</div>
<div class="root max-w-2xl mx-4 lg:max-w-none mt-32">
	<div class="hidden lg:block pt-8">
		<div class="sticky top-0 w-full flex justify-end pt-11 pr-8">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<svelte:element
				this={canGoBack ? 'button' : 'a'}
				class="items-center justify-center hidden w-10 h-10 mb-8 transition rounded-full shadow-md -top-1 -left-16 lg:flex group border border-zinc-700/50 bg-color4 ring-0 focus-visible:ring-2 ring-color4 hover:ring-color5"
				href={canGoBack ? undefined : '/blog'}
				aria-label="Go back to posts"
				on:click={goBack}
				on:keydown={goBack}
			>
				<ArrowLeftIcon class="w-4 h-4 transition stroke-color3 group-hover:stroke-color5" />
			</svelte:element>
		</div>
	</div>

	<div class="w-full mx-auto overflow-x-hidden">
		<article>
			<header class="flex flex-col">
				<PostDate class="text-sm sm:text-base" post={data.post} decorate collapsed />
				<h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
					{data.post.title}
				</h1>
			</header>

			<!-- render the post -->
			<div class="prose -z-0">
				<svelte:component this={data.component} />
			</div>
		</article>

		<!-- bio -->
		<hr class="border-color3" />
		<!-- <footer class="bg-transparent px-10 pb-10 w-full right absolute bottom-0 z-[1000]">
			
		</footer> -->
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
				<div class="text-5xl italic font-thin text-color3">Blog</div>
			</div>
		</footer>
	</div>

	<!-- table of contents -->
	<div class="hidden xl:block pt-10">
		<aside class="sticky hidden w-48 ml-8 xl:block top-8" aria-label="Table of Contents">
			<ToC post={data.post} />
		</aside>
	</div>
</div>

<style lang="postcss">
	.root {
		display: grid;
		grid-template-columns: 1fr;
	}

	@media screen(lg) {
		.root {
			/* 42rem matches max-w-2xl */
			grid-template-columns: 1fr 42rem 1fr;
		}
	}
</style>
