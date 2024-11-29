<script lang="ts">
	import PostPreview from '$lib/blog_components/PostPreview.svelte';
	import PostDate from '$lib/blog_components/PostDate.svelte';

	export let posts: any;
</script>

<div class="grid flex-col grid-flow-row grid-cols-2 gap-8">
	{#each posts as post}
		<div>
			<PostPreview {post} />
		</div>
	{/each}
</div>
