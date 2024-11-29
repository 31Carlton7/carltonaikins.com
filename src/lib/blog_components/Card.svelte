<script lang="ts">
	export let as = 'div';
	export let href: any = undefined;

	let _class: any = undefined;
	export { _class as class };
</script>

<svelte:element
	this={as}
	class={['relative flex flex-col items-start group', _class].join(' ')}
	data-sveltekit-prefetch
>
	<slot name="eyebrow" />

	{#if $$slots.title}
		<div class="text-base font-semibold tracking-tight ease-in-out">
			{#if href}
				<div
					class="absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl"
				/>
				<a {href} data-sveltekit-prefetch>
					<span class="absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl" />
					<span class="relative z-10">
						<slot name="title" />
					</span>
				</a>
			{:else}
				<slot name="title" />
			{/if}
		</div>
	{/if}

	{#if $$slots.description}
		<div
			class="relative z-10 flex-1 font-sans text-sm leading-7 text-black"
			class:mt-2={!!$$slots.title}
		>
			<slot name="description" />
		</div>
	{/if}

	{#if $$slots.actions}
		<div aria-hidden="true" class="relative z-10 flex items-center mt-4">
			<slot name="actions" />
		</div>
	{/if}
</svelte:element>
