import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";

export default function HeroSection() {
	return (
		<section
			id="Hero"
			className="relative flex min-h-screen flex-col justify-between bg-gradient-to-r from-violet-800 via-indigo-900 to-black text-center text-white"
		>
			<div className="flex flex-grow flex-col items-center justify-center">
				<h1 className="text-5xl leading-tight font-extrabold md:text-6xl">
					Hi, I'm Swapnanil
				</h1>
				<p className="mt-4 text-lg md:text-xl">
					A Full-Stack Developer crafting fast, scalable, and user-focused web
					applications.
				</p>
				<div className="mt-8 flex flex-wrap justify-center gap-5">
					<a
						href="#Projects"
						className="inline-block rounded-full bg-violet-600 px-8 py-3 text-lg font-semibold text-white shadow-sm transition-all duration-300 hover:bg-violet-700 hover:shadow-md"
					>
						Explore Projects
					</a>
					<a
						href="https://drive.usercontent.google.com/uc?id=12KwZkULzaEjOPzKu9EWoTKDSuQfDUBLA&export=download"
						download
						className="inline-block rounded-full border border-purple-400 px-8 py-3 text-lg font-semibold text-purple-300 transition-all duration-300 hover:border-purple-500 hover:text-purple-100"
					>
						Get My Resume
					</a>
				</div>
			</div>

			<div className="mb-8">
				<ul className="flex items-center justify-evenly text-lg md:text-2xl">
					<li className="flex gap-2">
						<span className="text-xs md:text-xl">Bundle By</span>
						<TbBrandVite />
					</li>
					<li>
						<span className="flex gap-2">
							<span className="text-xs md:text-xl">Built With</span>
							<FaReact />
						</span>
					</li>
					<li>
						<span className="flex gap-2">
							<span className="text-xs md:text-xl">Stored Via</span>
							<SiMongodb />
						</span>
					</li>
				</ul>
			</div>
		</section>
	);
}
