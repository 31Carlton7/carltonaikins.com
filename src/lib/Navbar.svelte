<script lang="ts">
	import Menu from 'svelte-material-icons/Menu.svelte';
	import Close from 'svelte-material-icons/Close.svelte';

	$: outerWidth = 0;
</script>

<svelte:window bind:outerWidth />

<nav
	class="flex flex-wrap items-center justify-center px-6 py-4 my-10 bg-white border rounded-full shadow-[0_3px_6px_0_rgba(128,128,128,0.19),0_10px_10px_0_rgba(255,255,255,0.17),0_23px_14px_0_rgba(255,255,255,0.10),0_41px_17px_0_rgba(255,255,255,0.03),0_0.5px_0.5px_0_rgba(255,255,255,0.16)]"
>
	<div class="">
		<ul
			class="left-0 grid items-center justify-center grid-cols-3 gap-2 transition-all duration-500 ease-in md:flex md:space-x-8 md:bg-transparent md:ring-0 md:pb-0 md:static md:z-auto"
		>
			<!-- <li>
				<a
					href="/"
					class="block text-[#A2A2A2] transition ease-in-out hover:text-[#8D8D8D] md:border-0 font-light"
					>Home</a
				>
			</li> -->
			<li>
				<a
					href="/blog"
					class="block text-[#A2A2A2] transition ease-in-out hover:text-[#8D8D8D] md:border-0 font-light"
					>Blog</a
				>
			</li>
			<li>
				<a
					href="mailto:carlton@charmtechnologies.co"
					class="block text-[#A2A2A2] transition ease-in-out hover:text-[#8D8D8D] md:border-0 font-light"
					>Contact</a
				>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/carltonaikins"
					class="block text-[#A2A2A2] transition ease-in-out hover:text-[#8D8D8D] md:border-0 font-light"
					>LinkedIn</a
				>
			</li>
			<li>
				<a
					href="https://www.github.com/31carlton7"
					class="block text-[#A2A2A2] transition ease-in-out hover:text-[#8D8D8D] md:border-0 font-light"
					>GitHub</a
				>
			</li>
			<li>
				<a
					href="https://x.com/31Carlton7"
					class="block text-[#A2A2A2] transition ease-in-out hover:text-[#8D8D8D] md:border-0 font-light"
					>Twitter</a
				>
			</li>
			<li>
				<a
					href="https://www.instagram.com/31carlton7"
					class="block text-[#A2A2A2] transition ease-in-out hover:text-[#8D8D8D] md:border-0 font-light"
					>Instagram</a
				>
			</li>
		</ul>
	</div>
</nav>
