import { TbBrandVite } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen flex-col justify-between bg-gradient-to-r from-violet-800 via-indigo-900 to-black text-center text-white"
        >
            <div className="flex flex-grow flex-col items-center justify-center">
                <h1 className="text-5xl leading-tight font-extrabold md:text-6xl">
                    Hi, I'm Swapnanil
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                    I am a passionate Full-Stack Developer creating modern and
                    responsive web applications that users love.
                </p>
                <div className="mt-8">
                    <a
                        href="#projects"
                        className="inline-block transform rounded-full bg-gray-900 px-8 py-3 text-lg font-bold text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-800"
                    >
                        View My Work
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
                            <span className="text-xs md:text-xl">
                                Built With
                            </span>
                            <FaReact />
                        </span>
                    </li>
                    <li>
                        <span className="flex gap-2">
                            <span className="text-xs md:text-xl">
                                Stored Via
                            </span>
                            <SiMongodb />
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    )
}
