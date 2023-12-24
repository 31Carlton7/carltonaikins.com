<script>
	import Footer from '$lib/Footer.svelte';
	$: outerWidth = 0;

	const FORMSPARK_ACTION_URL = 'https://submit-form.com/GzIjhGd5y';
</script>

<svelte:window bind:outerWidth />

<div class="max-w-2xl mx-4 lg:max-w-none mt-48 md:mt-8">
	<h2 class="mb-4 text-2xl tracking-tight font-extrabold text-start dark:text-white">Let's Talk</h2>
	<p class="mb-4 font-light text-start text-gray-500 dark:text-gray-400">
		Get in touch with me here or email me directly on <a
			class="text-color5 underline"
			href="mailto:carlton@charmtechnologies.co">carlton@charmtechnologies.co</a
		>
	</p>
	<form action={FORMSPARK_ACTION_URL} class="space-y-6 z-[100]">
		<div>
			<label for="email" class="flex justify-start mb-2 text-sm font-medium">Your email</label>
			<input
				type="email"
				id="email"
				name="email"
				class="bg-transparent border-color3 text-color5 block p-3 w-full text-sm rounded-full border shadow-sm focus:ring-primary-500 focus:border-primary-500"
				placeholder="name@example.com"
				required
			/>
		</div>
		<div>
			<label for="subject" class="flex justify-start mb-2 text-sm font-medium">Subject</label>
			<input
				type="text"
				id="subject"
				name="subject"
				class="bg-transparent border-color3 text-color5 block p-3 w-full text-sm rounded-full border shadow-sm focus:ring-primary-500 focus:border-primary-500"
				placeholder="Nice Projects"
				required
			/>
		</div>
		<div class="sm:col-span-2">
			<label
				for="message"
				class="flex justify-start bg-transparent border-color3 mb-2 text-sm font-medium"
			>
				Your message
			</label>
			<textarea
				id="message"
				name="message"
				rows="4"
				class="bg-transparent border-color3 text-color5 block p-2.5 w-full text-sm rounded-[20px] shadow-sm border focus:ring-primary-500 focus:border-primary-500"
				placeholder="Leave a comment..."
			/>
		</div>
		<div>
			<button
				type="submit"
				class="border rounded-full px-4 py-1 text-white hover:text-color4 border-color3 hover:bg-color3 transition ease-in-out"
			>
				Send
			</button>
		</div>
	</form>
</div>

{#if outerWidth > 768}
	<Footer pageName="Contact" />
{:else}
	<div class="md:hidden">
		<footer class="bg-transparent py-10 w-full">
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
				<div class="text-5xl italic font-thin text-color3">Contact</div>
			</div>
		</footer>
	</div>
{/if}
