<script>
	export let pageName = '';
</script>

<footer class="bg-transparent p-10 w-full absolute bottom-0 z-[1000]">
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
		<div class="text-5xl italic font-thin text-color3 select-none" draggable="false">
			{pageName}
		</div>
	</div>
</footer>
