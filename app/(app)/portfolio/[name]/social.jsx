'use client'
import useGetLocalItem from "@/hooks/useGetLocalItem";
import { useEffect, useState } from "react";
import { usePostSocialLinks } from "../portfolioQueries";

const Social = ({ portfolioId, data }) => {

    const localUser = useGetLocalItem('user');
    const { mutate } = usePostSocialLinks(portfolioId);

    const [socialLinks, setSocialLinks] = useState(data || { linkedIn: '', github: '', twitter: '', other: '' });

    useEffect(() => {
        setSocialLinks(data || { linkedIn: '', github: '', twitter: '', other: '' });
    }, [data]);

    const handleChange = (field, value) => {
        const updatedList = { ...socialLinks };
        updatedList[field] = value;
        setSocialLinks(updatedList);
    };

    const save = () => {
        const updatedData = {
            userId: localUser?.id,
            portfolioId,
            payload: socialLinks,
        };
        mutate(updatedData);
    };

    return (
        <>
            <div className='flex flex-col gap-4'>
                <input
                    type="text"
                    placeholder="Linked in"
                    className='h-10 p-4 rounded-xl'
                    value={socialLinks?.linkedIn}
                    onChange={(e) => handleChange('linkedIn', e.target.value)} />
                <input
                    type="text"
                    placeholder="Github"
                    className='h-10 p-4 rounded-xl'
                    value={socialLinks?.github}
                    onChange={(e) => handleChange('github', e.target.value)} />
                <input
                    type="text"
                    placeholder="Twitter"
                    className='h-10 p-4 rounded-xl'
                    value={socialLinks?.twitter}
                    onChange={(e) => handleChange('twitter', e.target.value)} />
                <input
                    type="text"
                    placeholder="Other"
                    className='h-10 p-4 rounded-xl'
                    value={socialLinks?.other}
                    onChange={(e) => handleChange('other', e.target.value)} />
            </div>

            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                onClick={save}>
                Save
            </button>
        </>
    )
}

export default Social;