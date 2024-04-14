'use client'
import useGetLocalItem from "@/hooks/useGetLocalItem";
import { useEffect, useState } from "react";
import { usePostMe } from "../portfolioQueries";

const Me = ({ portfolioId, data }) => {

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

export default Me;