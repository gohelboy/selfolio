'use client'
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
import { useGetPortfolioDetails } from '../(app)/portfolio/portfolioQueries'

const Portflio = ({ params: { name } }) => {
    const { data } = useGetPortfolioDetails(name);
    console.log(data)
    return (
        <main className='md:flex md:items-center md:flex-col'>
            <Navbar />
            <LandingPage data={data?.meData} />
            <Bio data={data?.meData?.bio} />
            <Education data={data?.educationData?.education} />
            <Experience data={data?.experienceData?.workExperience} />
            <Skills data={data?.skillData?.skills} />
            <Projects data={data?.projectData?.projects} />
            <Certificates data={data?.certificateData?.certifications} />
            <Refrences data={data?.refrenceData?.references} />
            <Socials data={data?.socialData?.socialMediaLinks} />
            <Footer />
        </main>
    )
}

export default Portflio