import React, { useState, useEffect } from 'react'

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navbarClasses = isScrolled
        ? 'bg-white shadow-md text-gray-800'
        : 'bg-transparent text-white'

    return (
        <header
            className={`${navbarClasses} fixed top-0 z-50 w-full transition-all duration-300 ease-in-out`}
        >
            <nav className="mx-auto flex w-11/12 max-w-3xl items-center justify-between pt-4 pb-4">
                <ul className="flex items-center gap-8">
                    <li>
                        <a
                            href="/"
                            className={`text-2xl font-bold ${isScrolled ? 'hover:text-blue-600' : 'hover:text-gray-300'}`}
                        >
                            MrBlue's Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="/DashBoard"
                            className={`text-2xl font-bold ${isScrolled ? 'hover:text-blue-600' : 'hover:text-gray-300'}`}
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="#Projects"
                            className={`text-2xl font-bold ${isScrolled ? 'hover:text-blue-600' : 'hover:text-gray-300'}`}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#Contact"
                            className={`text-2xl font-bold ${isScrolled ? 'hover:text-blue-600' : 'hover:text-gray-300'}`}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="#About"
                            className={`text-2xl font-bold ${isScrolled ? 'hover:text-blue-600' : 'hover:text-gray-300'}`}
                        >
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
