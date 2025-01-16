<script lang="ts">
	import PostPreview from '$lib/blog_components/PostPreview.svelte';
	import PostDate from '$lib/blog_components/PostDate.svelte';

	export let posts: any;
</script>

<div class="grid flex-col grid-cols-2 grid-flow-row gap-8 motion-preset-blur-up">
	{#each posts as post}
		<div>
			<PostPreview {post} />
		</div>
	{/each}
</div>
