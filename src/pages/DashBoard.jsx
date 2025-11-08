import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
	const navigate = useNavigate();
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	// new project form state
	const [newProject, setNewProject] = useState({
		title: "",
		description: "",
		image: "",
		hoverImg: "",
		tags: "",
		liveLink: "",
		repoLink: "",
	});

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/login");
			return;
		}

		const fetchProjects = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(
					"https://swapnanil-portfolio-api.onrender.com/api/projects",
				);
				if (!response.ok) throw new Error("Failed to fetch projects");
				const data = await response.json();
				setProjects(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchProjects();
	}, [navigate]); // ✅ no missing deps

	// handle input
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewProject((prevState) => ({ ...prevState, [name]: value }));
	};

	// add new project
	const handleCreateProject = async (e) => {
		console.log("Step 1: handleCreateProject function started."); // debug log

		e.preventDefault();
		const token = localStorage.getItem("token");

		const projectData = {
			...newProject,
			tags: newProject.tags.split(",").map((tag) => tag.trim()),
		};

		try {
			const response = await fetch(
				"https://swapnanil-portfolio-api.onrender.com/api/projects",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"x-auth-token": token, // send token
					},
					body: JSON.stringify(projectData),
				},
			);

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Failed to create project.");
			}

			alert("Project created successfully!");
			setNewProject({
				title: "",
				description: "",
				image: "",
				hoverImg: "",
				tags: "",
				liveLink: "",
				repoLink: "",
			}); // clear form
			fetchProjects(); // reload list
		} catch (err) {
			alert(err.message);
		}
	};

	// delete project
	const handleDelete = async (projectId) => {
		if (!window.confirm("Are you sure?")) {
			return;
		}

		const token = localStorage.getItem("token");
		try {
			const response = await fetch(
				`https://swapnanil-portfolio-api.onrender.com/api/projects/${projectId}`,
				{
					method: "DELETE",
					headers: {
						"x-auth-token": token, // send token
					},
				},
			);

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Failed to delete project.");
			}

			alert("Project deleted successfully!");
			fetchProjects(); // reload list
		} catch (err) {
			alert(err.message);
		}
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/");
	};

	return (
		<div className="min-h-screen bg-gray-900 p-8">
			<div className="mx-auto max-w-6xl space-y-8">
				{/* header */}
				<div className="flex items-center justify-between rounded-lg bg-gray-800 p-6 shadow-md">
					<h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
					<button
						onClick={handleLogout}
						className="rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
						type="button"
					>
						Log Out
					</button>
				</div>

				{/* add project form */}
				<div className="rounded-lg bg-gray-800 p-8 text-white shadow-md">
					<h2 className="mb-4 text-2xl font-semibold">Add a New Project</h2>
					<form
						onSubmit={handleCreateProject}
						className="grid grid-cols-1 gap-6 md:grid-cols-2"
					>
						<input
							type="text"
							name="title"
							value={newProject.title}
							onChange={handleInputChange}
							placeholder="Project Title"
							required
							className="rounded border border-gray-700 bg-gray-900 p-2 text-white"
						/>
						<input
							type="text"
							name="image"
							value={newProject.image}
							onChange={handleInputChange}
							placeholder="Image URL (e.g., /images/weather1.png)"
							required
							className="rounded border border-gray-700 bg-gray-900 p-2 text-white"
						/>
						<input
							type="text"
							name="hoverImg"
							value={newProject.hoverImg}
							onChange={handleInputChange}
							placeholder="Hover Image URL"
							className="rounded border border-gray-700 bg-gray-900 p-2 text-white"
						/>
						<input
							type="text"
							name="liveLink"
							value={newProject.liveLink}
							onChange={handleInputChange}
							placeholder="Live Demo Link"
							className="rounded border border-gray-700 bg-gray-900 p-2 text-white"
						/>
						<input
							type="text"
							name="repoLink"
							value={newProject.repoLink}
							onChange={handleInputChange}
							placeholder="GitHub Repo Link"
							className="rounded border border-gray-700 bg-gray-900 p-2 text-white"
						/>
						<input
							type="text"
							name="tags"
							value={newProject.tags}
							onChange={handleInputChange}
							placeholder="Tags (comma-separated, e.g., React, Node.js)"
							className="rounded border border-gray-700 bg-gray-900 p-2 text-white md:col-span-2"
						/>
						<textarea
							name="description"
							value={newProject.description}
							onChange={handleInputChange}
							placeholder="Project Description"
							required
							className="rounded border border-gray-700 bg-gray-900 p-2 text-white md:col-span-2"
							rows="4"
						></textarea>

						<div className="text-right md:col-span-2">
							<button
								type="submit"
								className="rounded bg-green-600 px-6 py-2 font-bold text-white hover:bg-green-700"
							>
								Add Project
							</button>
						</div>
					</form>
				</div>

				{/* project list */}
				<div className="rounded-lg bg-gray-800 p-8 shadow-md">
					<h2 className="mb-4 text-2xl font-semibold text-white">
						Manage Projects
					</h2>
					{isLoading ? (
						<p>Loading...</p>
					) : error ? (
						<p className="text-red-500">{error}</p>
					) : (
						<div className="space-y-4">
							{projects.length > 0 ? (
								projects.map((project) => (
									<div
										key={project._id}
										className="flex items-center justify-between rounded-lg border border-gray-700 bg-gray-900 p-4"
									>
										<h3 className="text-lg font-bold text-white">
											{project.title}
										</h3>
										<div className="flex gap-2">
											<button
												className="rounded bg-blue-600 px-3 py-1 text-sm font-bold text-white hover:bg-blue-700"
												type="button"
											>
												Edit
											</button>
											<button
												type="button"
												onClick={() => handleDelete(project._id)}
												className="rounded bg-red-600 px-3 py-1 text-sm font-bold text-white hover:bg-red-700"
											>
												Delete
											</button>
										</div>
									</div>
								))
							) : (
								<p className="text-center text-white">
									No projects found. Add one using the form above
								</p>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default AdminDashboard;
