<script lang="ts">
	import Card from './Card.svelte';
	import ArrowRightIcon from './ArrowRightIcon.svelte';

	export let post: any;
</script>

<Card href={`/blog/post/${post.slug}`}>
	<slot slot="eyebrow" name="eyebrow" />
	<slot slot="title">{post.title}</slot>
	<div slot="description" class="prose text-zinc-400">
		{@html post.preview.html}
	</div>
	<div slot="actions">
		<div class="flex items-center text-color5">
			<span class="text-sm font-medium">Read</span>
			<ArrowRightIcon class="w-4 h-4 ml-1" />
		</div>
	</div>
</Card>

<style>
	.prose > :global(p) {
		margin-top: 0;
		margin-bottom: 0;
	}
</style>
