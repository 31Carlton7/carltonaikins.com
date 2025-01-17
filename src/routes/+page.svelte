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
	import Clubology from '$lib/Clubology.svelte';
	import Elisha from '$lib/Elisha.svelte';
	import Tripalink from '$lib/Tripalink.svelte';
	import Storeshot from '$lib/Storeshot.svelte';
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
			<div class="flex">
				<h1 class="text-[#A2A2A2]">hi, i'm&nbsp;</h1>
				<span><Pfp /></span>
				<h1>&nbsp;carlton aikins,</h1>
				<h1 class="text-[#A2A2A2]">&nbsp;i'm a&nbsp;</h1>
			</div>
			<div class="flex">
				<h1>computer engineering 👨🏾‍💻</h1>
				<h1 class="text-[#A2A2A2]">&nbsp;student at the&nbsp;</h1>
			</div>
			<div class="flex">
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
		<div
			class="flex flex-col justify-start items-start my-12 space-y-4 w-full md:w-1/2 motion-preset-blur-up"
		>
			<h1 class="text-3xl">projects</h1>
			<div class="grid grid-cols-2 gap-4">
				<div
					class="flex flex-col bg-white space-y-3 p-6 rounded-[20px] main-site-shadow-border main-site-hover"
				>
					<div class="flex items-center">
						<Storeshot />
						<h6 class="ml-4 font-medium text-start">Storeshot</h6>
					</div>
					<p class="text-[#A2A2A2] font-light text-start">
						Storeshot speeds up the app store / play store deployment process by generating app
						store assets with AI.
					</p>
					<button
						class="p-[1px] font-medium text-white bg-gradient-to-b from-[#00D6D6] to-[#00A3A3] rounded-[10px] inline-block shadow-sm"
					>
						<a href="https://www.storeshotai.com/">
							<div
								class="bg-gradient-to-b from-[#9bdaec] to-[#1993bf] rounded-[9px] bg-clip-border p-[1px] before:inset-0"
							>
								<div class="bg-[#00D6D6] rounded-[8px]">Website</div>
							</div>
						</a>
					</button>
				</div>
				<div
					class="flex flex-col bg-white space-y-3 p-6 rounded-[20px] main-site-shadow-border main-site-hover"
				>
					<div class="flex items-center">
						<Elisha />
						<h6 class="ml-4 font-medium text-start">Elisha</h6>
					</div>
					<p class="text-[#A2A2A2] font-light text-start">
						Elisha was orignally a Bible reading and Church app. It will now transition to an AI
						powered Bible exploration app.
					</p>
					<div class="flex space-x-2">
						<button
							class="p-[1px] font-medium text-white bg-gradient-to-b from-[#F8D0B0] to-[#B07749] rounded-[10px] w-1/2 inline-block shadow-sm"
						>
							<a href="https://github.com/31Carlton7/elisha">
								<div
									class="bg-gradient-to-b from-[#FFEEE1] to-[#DA9964] rounded-[9px] bg-clip-border p-[1px] before:inset-0"
								>
									<div class="bg-[#F8D0B0] rounded-[8px]">Website</div>
								</div>
							</a>
						</button>
						<button
							class="p-[1px] font-medium text-white bg-gradient-to-b from-[#9B9B9B] to-[#696969] rounded-[10px] w-1/2 inline-block shadow-sm"
						>
							<a href="https://github.com/31Carlton7/elisha">
								<div
									class="bg-gradient-to-b from-[#C8C8C8] to-[#898989] rounded-[9px] bg-clip-border p-[1px] before:inset-0"
								>
									<div class="bg-[#9B9B9B] rounded-[8px]">GitHub</div>
								</div>
							</a>
						</button>
					</div>
				</div>
				<div
					class="flex flex-col bg-white space-y-3 p-6 rounded-[20px] main-site-shadow-border main-site-hover"
				>
					<div class="flex items-center">
						<Clubology />
						<h6 class="ml-4 font-medium text-start">Clubology</h6>
					</div>
					<p class="text-[#A2A2A2] font-light text-start">
						Clubology is an app for helping school clubs, student orgs, sports teams, and groups
						manage their club.
					</p>
					<button
						class="p-[1px] font-medium text-white bg-gradient-to-b from-[#1DDB9F] to-[#14936B] rounded-[10px] inline-block shadow-sm"
					>
						<a href="https://www.clubology.co/">
							<div
								class="bg-gradient-to-b from-[#8CE8CB] to-[#19BF8B] rounded-[9px] bg-clip-border p-[1px] before:inset-0"
							>
								<div class="bg-[#1DDB9F] rounded-[8px]">Website</div>
							</div>
						</a>
					</button>
				</div>
			</div>
		</div>

		<!-- Work Experiences -->
		<div
			class="flex flex-col justify-start items-start my-12 space-y-4 w-full md:w-1/2 motion-preset-blur-up"
		>
			<h1 class="text-2xl md:text-3xl">work experiences</h1>
			<a href="https://butterflyapp.co/" target="_blank" class="flex w-full main-site-hover">
				<Butterfly />
				<div class="flex flex-col flex-grow justify-center items-start ml-4">
					<div class="flex flex-wrap justify-between w-full md:flex-nowrap">
						<h6 class="font-medium">Butterfly</h6>
						<h6>Remote</h6>
					</div>
					<div class="flex flex-wrap flex-grow justify-between w-full">
						<p class="text-[#A2A2A2] font-light">Software Engineer</p>
						<p class="text-[#A2A2A2] font-light">Oct 2024 - Present</p>
					</div>
				</div>
			</a>
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
