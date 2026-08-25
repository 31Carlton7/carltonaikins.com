<script>
	import GrainEffect from '$lib/GrainEffect.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import StripePattern from '$lib/StripePattern.svelte';
	import '../app.css';
	import '@fontsource-variable/dm-sans';
	import Pfp from '$lib/PFP.svelte';
	import School from '$lib/School.svelte';
	import Butterfly from '$lib/Butterfly.svelte';
	import Google from '$lib/Google.svelte';
	import Tripalink from '$lib/Tripalink.svelte';
	import plynnShot from '$lib/images/work/plynn.jpg';
	import storeshotShot from '$lib/images/work/storeshot.jpg';
	import clubologyShot from '$lib/images/work/clubology.jpg';

	const work = [
		{
			name: 'plynn',
			domain: 'plynn.app',
			url: 'https://plynn.app',
			blurb: 'fully local dictation for your Mac. free and open source.',
			shot: plynnShot
		},
		{
			name: 'storeshot',
			domain: 'storeshotai.com',
			url: 'https://www.storeshotai.com',
			blurb: 'app store assets, generated with AI.',
			shot: storeshotShot
		},
		{
			name: 'clubology',
			domain: 'clubology.co',
			url: 'https://www.clubology.co',
			blurb: 'club management for student orgs and teams.',
			shot: clubologyShot
		},
		{
			name: 'elisha',
			domain: 'github.com/31Carlton7/elisha',
			url: 'https://github.com/31Carlton7/elisha',
			blurb: 'an open source Bible app, transitioning to AI powered exploration.',
			shot: null
		}
	];
</script>

<svelte:head>
	<title>Carlton Aikins</title>
	<meta
		name="description"
		content="Carlton Aikins is a software developer, entrepreneur, and student at the University of Southern California. Explore his portfolio, tech projects, and insights on software development and entrepreneurship. Stay updated on his journey in the tech world!"
	/>
	<meta name="author" content="Carlton Aikins" />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://www.carltonaikins.com" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Carlton Aikins" />
	<meta
		property="og:description"
		content="Carlton Aikins is a software developer, entrepreneur, and student at the University of Southern California. Explore his portfolio, tech projects, and insights on software development and entrepreneurship. Stay updated on his journey in the tech world!"
	/>
	<meta property="og:image" content="https://www.carltonaikins.com/opengraphimage.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="https://www.carltonaikins.com" />
	<meta property="twitter:url" content="https://www.carltonaikins.com" />
	<meta name="twitter:title" content="Carlton Aikins" />
	<meta
		name="twitter:description"
		content="Carlton Aikins is a software developer, entrepreneur, and student at the University of Southern California. Explore his portfolio, tech projects, and insights on software development and entrepreneurship. Stay updated on his journey in the tech world!"
	/>
	<meta name="twitter:image" content="https://www.carltonaikins.com/opengraphimage.png" />
</svelte:head>

<section class="bg-[#fff] md:h-full overflow-hidden">
	<GrainEffect />
	<StripePattern />
	<main
		class="flex relative flex-col flex-wrap justify-center items-center place-items-center px-4 mx-auto mt-32 max-w-screen-xl text-center md:py-8 lg:py-32 lg:px-12 md:mt-0"
	>
		<!-- Header -->
		<div
			class="flex flex-col justify-center items-center space-y-2 w-full text-2xl text-center md:text-4xl motion-preset-blur-up"
		>
			<div class="flex flex-wrap justify-center items-center">
				<h1 class="text-[#A2A2A2]">hi, i'm&nbsp;</h1>
				<span><Pfp /></span>
				<h1>&nbsp;carlton aikins,</h1>
				<h1 class="text-[#A2A2A2]">&nbsp;i'm a&nbsp;</h1>
			</div>
			<div class="flex flex-wrap justify-center items-center">
				<h1>computer engineering 👨🏾‍💻</h1>
				<h1 class="text-[#A2A2A2]">&nbsp;student at the&nbsp;</h1>
			</div>
			<div class="flex flex-wrap justify-center items-center">
				<span><School /></span>
				<h1>&nbsp;university of southern california</h1>
			</div>
		</div>

		<!-- Navigation -->
		<Navbar />

		<!-- About Me -->
		<p class="text-[#A2A2A2] font-light w-full md:w-1/2 my-20 motion-preset-blur-up">
			coding and entrepreneurship are two passions of mine. been at the grind for a few years now,
			and looking forward to the next few. <br /> <br /> currently speeding up the app store
			deployment process with AI @
			<a
				href="http://www.storeshotai.com"
				class="text-blue-500"
				target="_blank"
				rel="noopener noreferrer">storeshot</a
			>
		</p>

		<!-- Projects -->
		<div class="flex flex-col justify-start items-start my-12 space-y-2 w-full motion-preset-blur-up">
			<h1 class="text-3xl">projects</h1>
			<p class="text-[#A2A2A2] font-light pb-4">things i've built and shipped.</p>
			<div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 w-full">
				{#each work as project}
					<div class="flex flex-col">
						<a href={project.url} target="_blank" class="block bg-[#EFEFEF] rounded-[20px] overflow-hidden h-[300px] pt-9 px-9 main-site-hover">
							<div class="rounded-t-[10px] overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.18)] bg-white">
								<div class="flex items-center space-x-1.5 h-7 px-3.5 bg-[#F6F6F6] border-b border-black/5">
									<span class="w-2.5 h-2.5 rounded-full bg-[#D6D6D6]"></span>
									<span class="w-2.5 h-2.5 rounded-full bg-[#D6D6D6]"></span>
									<span class="w-2.5 h-2.5 rounded-full bg-[#D6D6D6]"></span>
								</div>
								{#if project.shot}
									<img src={project.shot} alt="{project.name} landing page" class="w-full block select-none" draggable="false" />
								{:else}
									<div class="h-[300px] bg-[#FAFAFA] flex items-center justify-center">
										<svg class="w-8 h-8 text-black/15" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
									</div>
								{/if}
							</div>
						</a>
						<div class="flex items-baseline justify-between mt-4 w-full">
							<h6 class="font-medium">{project.name}</h6>
							<a href={project.url} target="_blank" class="text-[#FF6A3D] text-sm font-medium">{project.domain} ↗</a>
						</div>
						<p class="text-[#A2A2A2] font-light text-start mt-1">{project.blurb}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Work Experiences -->
		<div
			class="flex flex-col justify-start items-start my-12 space-y-4 w-full md:w-1/2 motion-preset-blur-up"
		>
			<h1 class="text-2xl md:text-3xl">work experiences</h1>
			<a href="https://tripalink.com/" target="_blank" class="flex w-full main-site-hover">
				<Tripalink />
				<div class="flex flex-col flex-grow justify-center items-start ml-4">
					<div class="flex flex-wrap justify-between w-full md:flex-nowrap">
						<h6 class="font-medium">Tripalink (Nest Housing)</h6>
						<h6>Los Angeles, CA</h6>
					</div>
					<div class="flex flex-wrap flex-grow justify-between w-full">
						<p class="text-[#A2A2A2] font-light">Frontend Engineer</p>
						<p class="text-[#A2A2A2] font-light">Oct 2024 - Present</p>
					</div>
				</div>
			</a>
			<a href="https://butterflyapp.co/" target="_blank" class="flex w-full main-site-hover">
				<Butterfly />
				<div class="flex flex-col flex-grow justify-center items-start ml-4">
					<div class="flex flex-wrap justify-between w-full md:flex-nowrap">
						<h6 class="font-medium">Butterfly</h6>
						<h6>Remote</h6>
					</div>
					<div class="flex flex-wrap flex-grow justify-between w-full">
						<p class="text-[#A2A2A2] font-light">Software Engineer</p>
						<p class="text-[#A2A2A2] font-light">Oct 2024 - Jan 2025</p>
					</div>
				</div>
			</a>
			<a href="https://google.com/" target="_blank" class="flex w-full main-site-hover">
				<Google />
				<div class="flex flex-col flex-grow justify-center items-start ml-4">
					<div class="flex flex-wrap justify-between w-full md:flex-nowrap">
						<h6 class="font-medium">Google</h6>
						<h6>Cambridge, MA</h6>
					</div>
					<div class="flex flex-wrap flex-grow justify-between w-full">
						<p class="text-[#A2A2A2] font-light">Software Engineering Intern</p>
						<p class="text-[#A2A2A2] font-light">May 2024 - Aug 2024</p>
					</div>
				</div>
			</a>
		</div>

		<h2 class="my-20 font-serif text-2xl italic tracking-tight motion-preset-blur-up">
			In God we trust 🙏🏾
		</h2>
	</main>
</section>
