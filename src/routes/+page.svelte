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
			class="flex flex-wrap text-2xl md:text-5xl w-full md:w-[60%] items-center justify-center text-center leading-normal"
		>
			<h1 class="text-[#A2A2A2]">Hello there, I'm&nbsp;</h1>
			<span><Pfp /></span>
			<h1>&nbsp;Carlton Aikins,</h1>
			<h1 class="text-[#A2A2A2]">&nbsp;I'm a&nbsp;</h1>
			<h1>Computer Engineering 👨🏾‍💻</h1>
			<h1 class="text-[#A2A2A2]">&nbsp;student at the&nbsp;</h1>
			<span><School /></span>
			<h1>&nbsp;University of Southern California</h1>
		</div>

		<!-- Navigation -->
		<Navbar />

		<!-- About Me -->
		<p class="text-[#A2A2A2] font-light w-full md:w-1/2 my-20">
			Software and entrepreneurship has been my passion for a while now. I&#39;ve always been
			looking to make some sort of change in this world with the two. <br /><br />My creative flow
			and ideation process is what differentiates me and helps me create great digital products and
			experiences.<br /><br /> Take a look at my work!
		</p>

		<!-- Work Experiences -->
		<div class="flex flex-col justify-start items-start my-12 space-y-4 w-full md:w-1/2">
			<h1 class="text-2xl md:text-4xl">Work Experiences</h1>
			<div class="flex w-full">
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
			</div>
			<!-- <div class="flex w-full">
				<Tripalink />
				<div class="flex flex-col flex-grow justify-center items-start ml-4">
					<div class="flex flex-wrap justify-between w-full md:flex-nowrap">
						<h6 class="font-medium">Tripalink (Nest Housing)</h6>
						<h6>Los Angeles, CA</h6>
					</div>
					<div class="flex flex-wrap flex-grow justify-between w-full">
						<p class="text-[#A2A2A2] font-light">SEO Engineer</p>
						<p class="text-[#A2A2A2] font-light">Oct 2024 - Present</p>
					</div>
				</div>
			</div> -->
			<div class="flex w-full">
				<Google />
				<div class="flex flex-col flex-grow justify-center items-start ml-4">
					<div class="flex flex-wrap justify-between w-full md:flex-nowrap">
						<h6 class="font-medium">Google</h6>
						<h6>Cambridge, MA</h6>
					</div>
					<div class="flex flex-wrap flex-grow justify-between w-full">
						<p class="text-[#A2A2A2] font-light">Software Engineering Intern (STEP)</p>
						<p class="text-[#A2A2A2] font-light">May 2024 - Aug 2024</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Projects -->
		<div class="flex flex-col justify-start items-start my-12 space-y-4 w-full md:w-1/2">
			<h1 class="text-4xl">Projects</h1>
			<div class="grid grid-cols-2 space-x-3">
				<div
					class="flex flex-col bg-white space-y-3 border p-6 rounded-[20px] shadow-[0_3px_6px_0_rgba(128,128,128,0.19),0_10px_10px_0_rgba(255,255,255,0.17),0_23px_14px_0_rgba(255,255,255,0.10),0_41px_17px_0_rgba(255,255,255,0.03),0_0.5px_0.5px_0_rgba(255,255,255,0.16)]"
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
					class="flex flex-col bg-white space-y-3 border p-6 rounded-[20px] shadow-[0_3px_6px_0_rgba(128,128,128,0.19),0_10px_10px_0_rgba(255,255,255,0.17),0_23px_14px_0_rgba(255,255,255,0.10),0_41px_17px_0_rgba(255,255,255,0.03),0_0.5px_0.5px_0_rgba(255,255,255,0.16)]"
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
		<h2 class="my-20 font-serif text-2xl italic tracking-tight">In God we trust 🙏🏾</h2>
	</main>
</section>
