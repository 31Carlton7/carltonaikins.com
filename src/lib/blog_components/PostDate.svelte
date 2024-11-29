<script lang="ts">
	import { format, parseISO } from 'date-fns';

	export let decorate: any;
	export let post: any;
	export let collapsed = false;

	let _class: any;
	export { _class as class };
</script>

<div
	class={['relative flex text-[#A2A2A2] w-full text-sm leading-[30px]', _class].join(' ')}
	class:pl-3.5={decorate}
>
	<div
		class="bg-gradient-to-b from-[#E2E2E2] to-[#D1D1D1] rounded-[9px] bg-clip-border p-[1px]"
		class:flex-col={!collapsed}
	>
		<div class="flex bg-[#F1F1F1] rounded-[8px] px-3">
			<time datetime={post.date}>
				{format(new Date(parseISO(post.date)), 'MMMM d, yyyy')}
			</time>
			&nbsp;&nbsp;
			<span class="font-bold">{post.readingTime}</span>
		</div>
	</div>
</div>
