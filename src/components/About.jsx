const skills = [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Tailwind CSS',
    'Git & GitHub',
    'REST APIs',
    'Linux & CLI',
]
export default function About() {
    return (
        <section id="About" className="bg-white py-20">
            <div className="mx-auto w-11/12 max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">
                        About Me
                    </h2>
                    <p className="text-gray-600">
                        A little bit about my journey and the technologies I
                        work with.
                    </p>
                </div>
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div className="flex justify-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/135691331?v=4"
                            alt="A portrait of Swapnanil"
                            className="h-64 w-64 rounded-full object-cover shadow-lg md:h-80 md:w-80"
                        />
                    </div>
                    <div>
                        <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                            Who am i ?
                        </h3>
                        <p className="mb-6 leading-relaxed text-gray-700">
                            Hello! I'm Swapnanil Chakraborty, a developer with a
                            passion for building clean, efficient, and
                            user-friendly web applications. My journey into tech
                            started with a curiosity for how things work, and it
                            has evolved into a career where I get to solve
                            problems and build amazing things for the web.
                        </p>
                        <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                            My Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-violet-100 px-4 py-2 text-center text-violet-800"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
