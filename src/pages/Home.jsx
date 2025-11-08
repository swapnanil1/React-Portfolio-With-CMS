import About from "../components/About";
import Contact from "../components/Contact";
import HeroSection from "../components/Hero";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
export default function HomePage() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<Project />
			<About />
			<Contact />
		</>
	);
}
