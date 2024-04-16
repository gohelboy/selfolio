import React from 'react'
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import Bio from './Bio'
import Education from './Education'
import Skills from './skills'
import Projects from './projects'
import Experience from './Experience'
import Certificates from './certificates'
import Refrences from './Refrences'
import Socials from './socials'
import Footer from './Footer'

const Portflio = () => {
    return (
        <main className='md:flex md:items-center md:flex-col'>
            <Navbar />
            <LandingPage />
            <Bio />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Certificates />
            <Refrences />
            <Socials />
            <Footer />
        </main>
    )
}

export default Portflio