'use client'
import { routes } from '@/utils/routes'
import Link from 'next/link'
import { useState } from 'react'
import { useGetPortfolioDetails } from '../portfolioQueries'
import Education from './education'
import Me from './me'
import Experience from './Experience'
import Skills from './skills'
import Project from './project'
import Ceritificate from './ceritficate'
import Language from './language'
import Hobby from './hobby'
import Refrence from './Refrence'
import Social from './social'

const Page = ({ params: { name } }) => {

    const [activeTab, setActiveTab] = useState('Me');

    const { data } = useGetPortfolioDetails(name)

    const tabs = [
        { name: 'Me', content: <Me portfolioId={name} data={data?.meData} /> },
        { name: 'Education', content: <Education portfolioId={name} data={data?.educationData?.education} /> },
        { name: 'Experience', content: <Experience portfolioId={name} data={data?.experienceData?.workExperience} /> },
        { name: 'Skills', content: <Skills portfolioId={name} data={data?.skillData?.skills} /> },
        { name: 'Projects', content: <Project portfolioId={name} data={data?.projectData?.projects} /> },
        { name: 'Certifications', content: <Ceritificate portfolioId={name} data={data?.certificateData?.certifications} /> },
        { name: 'Languages', content: <Language portfolioId={name} data={data?.languageData?.languages} /> },
        { name: 'Intrest', content: <Hobby portfolioId={name} data={data?.hobbyData?.interestsHobbies} /> },
        { name: 'References', content: <Refrence portfolioId={name} data={data?.refrenceData?.references} /> },
        { name: 'SocialLinks', content: <Social portfolioId={name} data={data?.socialData?.socialMediaLinks} /> }
    ];

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <main className='flex min-h-screen flex-col gap-4'>
            <Link href={routes.home} className='absolute bottom-10 right-10 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Back</Link>
            <div className='flex'>
                <div className='flex flex-col items-start justify-center gap-4 border'>
                    {tabs.map(tab => (
                        <button key={tab.name}
                            className={activeTab === tab.name ? 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' : ''}
                            onClick={() => handleTabChange(tab.name)}>
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className='flex flex-col gap-2'>
                    {tabs.map(tab => (
                        <div key={tab.name} className={activeTab === tab.name ? 'block' : 'hidden'}>
                            <div className='p-6'>
                                {tab?.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Page;