const App = () => (
	<div className="w-full min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] flex p-4 justify-center">
		<main className="bg-[#F9FAFB] shadow w-full rounded-[4px] md:rounded-md px-3 sm:px-4 py-16 sm:py-20 lg:p-24 flex flex-col lg:flex-row lg:items-center justify-center gap-12">
			<section className="flex flex-col gap-8 sm:gap-16">
				<article className="flex flex-col gap-4 sm:gap-6">
					<h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl text-neutral-900">
						Well crafted abstract images
					</h1>
					<p className="text-lg sm:text-xl text-neutral-600">
						High quality abstract images for your projects, wallpaper and
						presentations.
					</p>
				</article>
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:flex sm:gap-8">
					<button
						type="button"
						className="px-5 py-3 text-base transition-all duration-300 ease-in-out bg-white border rounded shadow sm:text-lg sm:px-10 sm:py-4 border-neutral-200 text-neutral-900 h-fit focus:outline focus:outline-indigo-100 hover:bg-neutral-50 focus:bg-neutral-50"
					>
						Learn more
					</button>
					<button
						type="button"
						className="px-5 py-3 text-base text-white transition duration-300 ease-in-out bg-indigo-700 rounded shadow sm:text-lg sm:px-10 sm:py-4 hover:bg-indigo-800 outline-4 outline-indigo-100 focus:outline focus:outline-indigo-100 h-fit focus:bg-indigo-800"
					>
						See pricing
					</button>
				</div>
			</section>
			<img src="/img/prism.png" alt="Prism" className="max-w-[616px] py-8" />
		</main>
	</div>
);

export default App;
