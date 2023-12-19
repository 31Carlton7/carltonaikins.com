<script>
	import StripePattern from '$lib/StripePattern.svelte';
    import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';

    const FORMSPARK_ACTION_URL = "https://submit-form.com/GzIjhGd5y";
</script>

<section class="bg-[#25262D] h-full overflow-hidden">
    <StripePattern />
	<Navbar />
    <div class=" h-screen w-[50%] items-center justify-center place-items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-12">
        <h2
            class="mb-4 text-2xl tracking-tight font-extrabold text-start  dark:text-white"
        >
            Let's Talk
        </h2>
        <p class="mb-4 font-light text-start text-gray-500 dark:text-gray-400">
            Get in touch with me here or email me directly on <a class="text-color5 underline" href="mailto:carlton@charmtechnologies.co">carlton@charmtechnologies.co</a>
        </p>
        <form action={FORMSPARK_ACTION_URL} class="space-y-6 z-[100]">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium  dark:text-gray-300"
                    >Your email</label
                >
                <input
                    type="email"
                    id="email"
                    name="email"
                    class="bg-transparent border-color3 text-color5 block p-3 w-full text-sm rounded-full border shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="name@example.com"
                    required
                />
            </div>
            <div>
                <label
                    for="subject"
                    class="block mb-2 text-sm font-medium dark:text-gray-300">Subject</label
                >
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    class="bg-transparent border-color3 text-color5 block p-3 w-full text-sm rounded-full border shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Nice Projects"
                    required
                />
            </div>
            <div class="sm:col-span-2">
                <label
                    for="message"
                    class="bg-transparent border-color3 block mb-2 text-sm font-medium  dark:text-gray-400"
                    >Your message</label
                >
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="bg-transparent border-color3 text-color5 block p-2.5 w-full text-sm  rounded-[20px] shadow-sm border focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Leave a comment..."
                />
            </div>
            <div>
                <button
                    type="submit"
                    class="border rounded-full px-4 py-1 text-white hover:text-color4 border-color3 hover:bg-color3 transition ease-in-out"
                    >Send</button>
            </div>
        </form>
    </div>
	<Footer pageName="Contact"/>
</section>