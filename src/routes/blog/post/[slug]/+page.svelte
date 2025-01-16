<script>
	import './../../../../app.css';
	import '@fontsource-variable/dm-sans';

	import { website, name, bio, avatar } from '$lib/info.ts';
	import { afterNavigate } from '$app/navigation';
	import Navbar from '$lib/Navbar.svelte';
	import StripePattern from '$lib/StripePattern.svelte';
	import GrainEffect from '$lib/GrainEffect.svelte';
	import pfp from '$lib/images/pfp.png';
	import { format, parseISO } from 'date-fns';

	/** @type {import('./$types').PageData} */
	export let data;

	// generated open-graph image for sharing on social media.
	// see https://og-image.vercel.app/ for more options.

	const url = `${website}/${data.post.slug}`;

	// if we came from /posts, we will use history to go back to preserve
	// posts pagination
	let canGoBack = false;
	afterNavigate(({ from }) => {
		if (from && from.url.pathname.startsWith('/posts')) {
			canGoBack = true;
		}
	});
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

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={website} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={data.post.title} />
	<meta name="twitter:description" content={data.post.preview.text} />
</svelte:head>

<div class="overflow-hidden h-full">
	<GrainEffect />
	<StripePattern />
</div>
<div class="relative mx-4 mt-16 md:mt-32 md:max-w-2xl lg:max-w-none">
	<div class="mx-auto w-full">
		<article>
			<header class="flex flex-col items-center">
				<a href="/" class="">
					<img
						class="select-none pointer-events-none w-[3rem] rounded-xl"
						src={pfp}
						alt="Carlton Aikins Profile"
						draggable="false"
					/>
				</a>
				<Navbar />
				<h1 class="mt-6 text-4xl tracking-tight text-center sm:text-5xl">
					{data.post.title}
				</h1>
				<div
					class={[
						'relative flex text-[#A2A2A2] w-full text-sm leading-[30px] justify-center my-4'
					].join(' ')}
				>
					<div
						class="bg-gradient-to-b from-[#E2E2E2] to-[#D1D1D1] rounded-[9px] bg-clip-border p-[1px]"
					>
						<div class="flex bg-[#F1F1F1] rounded-[8px] px-3">
							<time datetime={data.post.date}>
								{format(new Date(parseISO(data.post.date)), 'MMMM d, yyyy')}
							</time>
							&nbsp;&nbsp;
							<span class="font-bold">{data.post.readingTime}</span>
						</div>
					</div>
				</div>
			</header>

			<!-- render the post -->
			<div class="max-w-xl md:mx-[20rem] prose text-lg leading-10 -z-0 lg:max-w-none">
				<svelte:component this={data.component} />
			</div>
		</article>
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
