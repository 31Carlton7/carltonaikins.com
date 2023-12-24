<script lang="ts">
	import PostPreview from '$lib/blog_components/PostPreview.svelte';
	import PostDate from '$lib/blog_components/PostDate.svelte';

	export let posts: any;
</script>

<div class="flex flex-col gap-16 md:border-l md:pl-6 md:border-zinc-700/80">
	{#each posts as post}
		<article class="grid items-start grid-cols-4 gap-8">
			<PostDate class="flex-col hidden md:flex text-sm" {post} decorate={''} />
			<div class="col-span-4 md:col-span-3">
				<PostPreview {post}>
					<slot slot="eyebrow">
						<PostDate class="md:hidden" {post} collapsed decorate />
					</slot>
				</PostPreview>
			</div>
		</article>
	{/each}
</div>
