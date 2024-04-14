'use client'
import { routes } from '@/utils/routes'
import Link from 'next/link'
import { useState } from 'react'
import { useGetPortfolioDetails } from '../portfolioQueries'
import Education from './education'
import Me from './me'
import Experience from './Experience'

const Page = ({ params: { id } }) => {

    const [activeTab, setActiveTab] = useState('Me');

    const { data } = useGetPortfolioDetails(id)

    const tabs = [
        { name: 'Me', content: <Me portfolioId={id} data={data?.meData} /> },
        { name: 'Education', content: <Education portfolioId={id} data={data?.educationData?.education} /> },
        { name: 'Experience', content: <Experience portfolioId={id} data={data?.experienceData?.workExperience} /> },
        { name: 'Skills', content: 'Skills tab content goes here' },
        { name: 'Projects', content: 'Projects tab content goes here' },
        { name: 'Certifications', content: 'Certifications tab content goes here' },
        { name: 'VolunteerExperience', content: 'Volunteer Experience tab content goes here' },
        { name: 'Languages', content: 'Languages tab content goes here' },
        { name: 'InterestsHobbies', content: 'Interests / Hobbies tab content goes here' },
        { name: 'References', content: 'References tab content goes here' },
        { name: 'SocialLinks', content: 'Social Links tab content goes here' }
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