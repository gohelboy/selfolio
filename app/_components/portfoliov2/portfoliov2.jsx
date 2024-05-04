'use client'
import { useState } from "react"
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
import { cn } from "@/lib/utils"

const PortfolioV2 = () => {

    const [themeMode, setThemeMode] = useState(localStorage.getItem('theme') || 'light');

    return (
        <main className={cn("flex flex-col items-center", themeMode === 'dark' ? 'text-white bg-[#111111]' : 'text-black')}>
            <Navbar theme={themeMode} setTheme={setThemeMode} />
            <LandingSection theme={themeMode} />
            <Bio theme={themeMode} />
            <Education />
            <Experience />
            <Skills theme={themeMode} />
            <Projects />
            <Certificates theme={themeMode} />
            <Refrences theme={themeMode} />
            <Contact theme={themeMode} />
            <Footer theme={themeMode} />
        </main>
    )
}

export default PortfolioV2
