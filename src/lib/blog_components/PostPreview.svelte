<script lang="ts">
	import Card from './Card.svelte';
	import PostDate from './PostDate.svelte';

	export let post: any;
</script>

<Card
	href={`/blog/post/${post.slug}`}
	class="bg-white rounded-[20px] p-4 md:p-6 main-site-shadow-border main-site-hover"
>
	<slot slot="eyebrow" name="eyebrow" />
	<slot slot="title">{post.title}</slot>
	<div
		slot="description"
		class="prose text-[#A2A2A2] font-light leading-7 line-clamp-3 tracking-tight"
	>
		{@html post.preview.html}
	</div>
	<div slot="actions" class="items-end h-full md:flex">
		<button
			class="p-[1px] font-medium text-white bg-gradient-to-b from-[#1DA8DB] to-[#147493] rounded-[10px] inline-block shadow-sm"
		>
			<div
				class="bg-gradient-to-b from-[#8CD7E8] to-[#199BBF] rounded-[9px] bg-clip-border p-[1px]"
			>
				<div class="bg-[#1ECEE6] rounded-[8px] px-3">Read</div>
			</div>
		</button>
		<PostDate class="hidden md:block" {post} decorate />
	</div>
</Card>

<style>
	.prose > :global(p) {
		margin-top: 0;
		margin-bottom: 0;
	}
</style>
