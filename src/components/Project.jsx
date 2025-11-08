import { useEffect, useState } from "react";
export default function Project() {
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [hoveredStatus, setHoveredStatus] = useState(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const responce = await fetch(
					"https://swapnanil-portfolio-api.onrender.com/api/projects",
				);
				if (!responce.ok) throw new Error("project fetch failed");
				const data = await responce.json();
				setProjects(data);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "Failed to load projects",
				);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProjects();
	}, []);
	if (isLoading) {
		return (
			<section id="Projects">
				<div className="text-center">Loading Projects...</div>
			</section>
		);
	}
	if (error) {
		return (
			<section id="Projects">
				<div className="text-center text-red-600">Error: {error}</div>
			</section>
		);
	}
	return (
		//  main container
		<section id="Projects" className="bg-grey-100 py-20">
			{/* this container sets the max width */}
			<div className="mx-auto w-11/12 max-w-6xl">
				<h2 className="text-4xl font-bold text-gray-800">My Work & Projects</h2>
				<p className="mt-4 text-lg text-gray-600">
					Here are a few projects I've worked on recently.
				</p>
				{/* this container setups up projects from the api via a map fn  */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						// each project's first div, sets the entire hover status
						<div
							key={project._id}
							role="group"
							className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 focus:-translate-y-2"
							onMouseEnter={() => setHoveredStatus(index)}
							onMouseLeave={() => setHoveredStatus(null)}
							onFocus={() => setHoveredStatus(index)}
							onBlur={() => setHoveredStatus(null)}
						>
							{/* each project has a image area  */}
							<div className="h-56 overflow-hidden">
								<img
									src={
										hoveredStatus === index ? project.hoverImg : project.image
									}
									alt={project.title}
									className={`${hoveredStatus === index ? "scale-110" : "scale-100"} h-full w-full transform object-cover transition-transform duration-500 ease-in-out`}
								/>
							</div>
							{/* and a details area  */}
							<div className="p-6">
								<div className="mb-4 flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="rounded-full bg-gray-200 px-2.5 py-1 text-xs font-semibold text-gray-800"
										>
											{tag}
										</span>
									))}
								</div>
								<h3 className="mb-2 text-2xl font-bold text-gray-900">
									{project.title}
								</h3>
								<p className="mb-4 text-gray-700">{project.description}</p>
								<div className="flex items-center gap-4">
									<a
										href={project.liveLink}
										target="_blank"
										rel="noopener noreferrer"
										className="font-semibold text-purple-600 hover:underline"
									>
										View Live
									</a>
									<a
										href={project.repoLink}
										target="_blank"
										rel="noopener noreferrer"
										className="font-semibold text-gray-600 hover:underline"
									>
										Github Repo
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
