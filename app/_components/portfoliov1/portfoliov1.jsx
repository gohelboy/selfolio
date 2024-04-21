'use client'

import { useGetPortfolioDetails } from "@/app/(app)/portfolio/portfolioQueries";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Bio from "./Bio";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./skills";
import Projects from "./projects";
import Certificates from "./certificates";
import Refrences from "./Refrences";
import Socials from "./socials";
import Footer from "./Footer";


const PortfolioV1 = ({ name }) => {
    const { data, isPending, isSuccess } = useGetPortfolioDetails(name);

    return (
        <main className='md:flex md:items-center md:flex-col'>
            {isPending || (isSuccess && !data) ? <h1 className='text-5xl'>Loading...</h1> : <>
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
            </>}

        </main>
    )
}

export default PortfolioV1