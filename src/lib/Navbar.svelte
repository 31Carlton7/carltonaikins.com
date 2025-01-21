<script>
	import { Pencil, Mail } from 'lucide-svelte';
	import linkedin from '$lib/images/linkedin.avif';
	import github from '$lib/images/github.webp';
	import twitter from '$lib/images/twitter.png';
	import instagram from '$lib/images/instagram.webp';
</script>

<nav class="flex flex-wrap justify-center items-center px-4 py-3 my-10">
	<div class="">
		<ul
			class="grid grid-cols-3 gap-4 justify-center items-center transition-all duration-500 ease-in md:flex md:space-x-8 md:static md:z-auto"
		>
			<li>
				<a
					href="/blog"
					class="block text-[#A2A2A2] transition-all duration-300 ease-in-out hover:text-[#8D8D8D] hover:scale-110"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Pencil size={20} />
				</a>
			</li>
			<li>
				<a
					href="mailto:carlton@charmtechnologies.co"
					class="block text-[#A2A2A2] transition-all duration-300 ease-in-out hover:text-[#8D8D8D] hover:scale-110"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Mail size={20} />
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/carltonaikins"
					class="block text-[#A2A2A2] transition-all duration-300 ease-in-out hover:text-[#8D8D8D] hover:scale-110"
				>
					<img src={linkedin} alt="LinkedIn" width="28" height="28" class="rounded-md" />
				</a>
			</li>
			<li>
				<a
					href="https://www.github.com/31carlton7"
					class="block text-[#A2A2A2] transition-all duration-300 ease-in-out hover:text-[#8D8D8D] hover:scale-110"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={github} alt="GitHub" width="28" height="28" class="rounded-md" />
				</a>
			</li>
			<li>
				<a
					href="https://x.com/31Carlton7"
					class="block text-[#A2A2A2] transition-all duration-300 ease-in-out hover:text-[#8D8D8D] hover:scale-110"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={twitter} alt="Twitter" width="28" height="28" class="rounded-md" />
				</a>
			</li>
			<li>
				<a
					href="https://www.instagram.com/31carlton7"
					class="block text-[#A2A2A2] transition-all duration-300 ease-in-out hover:text-[#8D8D8D] hover:scale-110"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={instagram} alt="Instagram" width="28" height="28" class="rounded-md" />
				</a>
			</li>
		</ul>
	</div>
</nav>
