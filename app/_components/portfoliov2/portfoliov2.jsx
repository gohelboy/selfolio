


import Bio from "./Bio"
import Certificates from "./certificates"
import Contact from "./Contact"
import Education from "./Education"
import Experience from "./Experience"
import Footer from "./Footer"
import LandingSection from "./LandingSection"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Refrences from "./Refrences"
import Skills from "./Skills"

const PortfolioV2 = () => {
    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <LandingSection />
            <Bio />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Certificates />
            <Refrences />
            <Contact />
            <Footer />
        </main>
    )
}

export default PortfolioV2
