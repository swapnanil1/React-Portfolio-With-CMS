import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/Hero'
import Project from '../components/Project'
import About from '../components/About'
export default function HomePage() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <Project />
            <About />
        </>
    )
}
