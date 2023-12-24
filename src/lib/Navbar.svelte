<script lang="ts">
	import Logo from './Logo.svelte';
	import Menu from 'svelte-material-icons/Menu.svelte';
	import Close from 'svelte-material-icons/Close.svelte';

	export let menuOpen: boolean = false;
</script>

<nav class="w-full top-0 left-0 absolute z-[10]">
	<div class="md:flex items-center justify-between py-4 md:px-10 px-7">
		<div class="flex items-center justify-center">
			<Logo />
		</div>
		<ul
			class="bg-color4 md:bg-transparent md:ring-0 ring-1 ring-color3 md:flex md:items-center md:pb-0 pb-3 absolute md:static md:z-auto left-0 w-full md:w-auto transition-all duration-500 ease-in space-x-8 md:mt-4 {menuOpen
				? 'top-0'
				: 'top-[-460px]'}"
		>
			<li class="ml-8">
				<a
					href="/blog"
					class="block py-2 pl-3 pr-4 text-white hover:text-color3 md:border-0 md:p-0 transition ease-in-out"
					>Blog</a
				>
			</li>
			<li>
				<a
					href="/projects"
					class="block py-2 pl-3 pr-4 text-white hover:text-color3 md:border-0 md:p-0 transition ease-in-out"
					>Projects</a
				>
			</li>
			<li>
				<a
					href="/contact"
					class="block py-2 pl-3 pr-4 text-white hover:text-color3 md:border-0 md:p-0 transition ease-in-out"
					>Contact</a
				>
			</li>
			<li>
				<a href="./resume.pdf" target="_blank" class="block py-2 pl-3 pr-4 md:border-0 md:p-0">
					<div
						class="border rounded-full px-4 py-2 text-white hover:text-color4 border-color3 hover:bg-color3 transition ease-in-out"
					>
						Resume
					</div>
				</a>
			</li>
		</ul>
		<div class="absolute right-8 top-6 cursor-pointer md:hidden">
			<button
				on:click={() => (menuOpen = !menuOpen)}
				class="transition duration-300 bg-none inline-block"
			>
				{#if menuOpen}
					<Close class="text-white" />
				{:else}
					<Menu class="text-white" />
				{/if}
			</button>
		</div>
	</div>
</nav>
