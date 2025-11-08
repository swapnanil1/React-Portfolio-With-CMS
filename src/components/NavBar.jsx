import { useEffect, useState } from "react";

function NavBar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navbarClasses = isScrolled
		? "bg-white shadow-md text-gray-800"
		: "bg-transparent text-white";

	return (
		<header
			className={`${navbarClasses} fixed top-0 z-50 w-full transition-all duration-300 ease-in-out`}
		>
			<nav className="mx-auto flex w-11/12 max-w-6xl items-center justify-between pt-4 pb-4">
				<a href="#Hero" className="text-[1.8rem] font-bold md:text-2xl">
					MrBlue's Portfolio
				</a>
				<ul className="ml-6 flex flex-wrap items-center justify-center gap-4 md:flex md:flex-row md:gap-8">
					{" "}
					<li>
						<a
							href="/DashBoard"
							className={`sm: text-xl font-medium md:text-base ${isScrolled ? "hover:text-violet-600" : "hover:text-gray-300"}`}
						>
							Dashboard
						</a>
					</li>
					<li>
						<a
							href="#Projects"
							className={`sm: text-xl font-medium md:text-base ${isScrolled ? "hover:text-violet-600" : "hover:text-gray-300"}`}
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#About"
							className={`sm: text-xl font-medium md:text-base ${isScrolled ? "hover:text-violet-600" : "hover:text-gray-300"}`}
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#Contact"
							className={`sm: text-xl font-medium md:text-base ${isScrolled ? "hover:text-violet-600" : "hover:text-gray-300"}`}
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavBar;
