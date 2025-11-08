import { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (e) => {
		const { value, name } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		try {
			const responce = await fetch(
				"https://swapnanil-portfolio-api.onrender.com/api/messages",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formData),
				},
			);
			if (responce.ok) {
				setStatus("Message Sent Successfully");
			} else setStatus("Error sending the Message");
		} catch (error) {
			console.error("Error:", error);
			setStatus("An error occurred. Please try again.");
		}
	};

	return (
		<section id="Contact" className="bg-gray-100 py-20">
			<div className="mx-auto w-11/12 max-w-3xl">
				<div className="mb-12 text-center">
					<h2 className="text-4xl font-bold text-gray-800">Get in touch</h2>
					<p className="mt-4 text-lg text-gray-600">
						Have a question or want to work together? Drop me a message!
					</p>
				</div>
				<form
					onSubmit={handleSubmit}
					className="rounded-lg bg-white p-8 shadow-lg"
				>
					<div className="mb-6">
						<label
							className="mb-2 block font-bold text-gray-700"
							htmlFor="name"
						>
							Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							value={formData.name}
							onChange={handleChange}
							className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
						></input>
					</div>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="mb-2 block font-bold text-gray-700"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="mb-2 block font-bold text-gray-700"
						>
							Message
						</label>
						<textarea
							id="message"
							type="textarea"
							name="message"
							value={formData.message}
							onChange={handleChange}
							cols={50}
							rows={10}
							className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
						/>
					</div>
					<div className="text-center">
						<button
							type="submit"
							className="text-bold rounded-full bg-violet-500 px-8 py-3 text-white transition-all duration-300 hover:bg-violet-700 hover:text-xl"
						>
							Send Message
						</button>
					</div>
					{status && <p className="mt-4 text-center">{status}</p>}
				</form>
			</div>
		</section>
	);
}
