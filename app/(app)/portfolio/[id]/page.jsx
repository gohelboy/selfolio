'use client'
import useGetLocalItem from '@/hooks/useGetLocalItem'
import { routes } from '@/utils/routes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useGetPortfolioDetails, usePostMe } from '../portfolioQueries'

const Page = ({ params: { id } }) => {

    const [activeTab, setActiveTab] = useState('Me');

    const { data } = useGetPortfolioDetails(id)

    const tabs = [
        { name: 'Me', content: <MeContent portfolioId={id} data={data?.meData} /> },
        { name: 'Education', content: 'Education tab content goes here' },
        { name: 'Experience', content: 'Experience tab content goes here' },
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

export default Page


export const MeContent = ({ portfolioId, data }) => {
    const localUser = useGetLocalItem('user');
    const { mutate } = usePostMe(portfolioId);

    const [stateData, setStateData] = useState({
        fullName: data?.fullName || '',
        email: data?.email || '',
        phoneNumber: data?.phoneNumber || '',
        address: data?.address || '',
        tagline: data?.tagline || '',
        bio: data?.bio || '',
    });

    // Update stateData when the data prop changes
    useEffect(() => {
        setStateData({
            fullName: data?.fullName || '',
            email: data?.email || '',
            phoneNumber: data?.phoneNumber || '',
            address: data?.address || '',
            tagline: data?.tagline || '',
            bio: data?.bio || '',
        });
    }, [data]);

    const save = () => {
        const updatedData = {
            userId: localUser?.id,
            portfolioId,
            payload: { ...stateData }
        };
        mutate(updatedData);
    }

    return (
        <div className='flex flex-col gap-4'>
            <input type="text" placeholder="Enter name" className='h-10 p-4 rounded-xl' value={stateData.fullName} onChange={(e) => setStateData({ ...stateData, fullName: e.target.value })} />
            <input type="email" placeholder="Email" className='h-10 p-4 rounded-xl' value={stateData.email} onChange={(e) => setStateData({ ...stateData, email: e.target.value })} />
            <input type="number" placeholder="Phone Number" className='h-10 p-4 rounded-xl' value={stateData.phoneNumber} onChange={(e) => setStateData({ ...stateData, phoneNumber: e.target.value })} />
            <textarea placeholder="Address" className='p-4 rounded-xl' value={stateData.address} onChange={(e) => setStateData({ ...stateData, address: e.target.value })} />
            <input type="text" placeholder="tagline" className='h-10 p-4 rounded-xl' value={stateData.tagline} onChange={(e) => setStateData({ ...stateData, tagline: e.target.value })} />
            <textarea placeholder="Bio" className='p-4 rounded-xl' value={stateData.bio} onChange={(e) => setStateData({ ...stateData, bio: e.target.value })} />
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' onClick={save}>Save</button>
        </div>
    )
}