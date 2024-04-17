'use client'
import useGetLocalItem from "@/hooks/useGetLocalItem";
import { useEffect, useState } from "react";
import { usePostLanguages } from "../portfolioQueries";

const Language = ({ portfolioId, data }) => {
    const localUser = useGetLocalItem('user');
    const { mutate } = usePostLanguages(portfolioId);

    const [laguages, setLanguages] = useState(data || [{ language: '', proficiency: '' }]);

    useEffect(() => {
        setLanguages(data || [{ language: '', proficiency: '' }]);
    }, [data]);

    const handleChange = (index, field, value) => {
        const updatedList = [...laguages];
        updatedList[index][field] = value;
        setLanguages(updatedList);
    };

    const addProject = () => {
        setLanguages([...laguages, { language: '', proficiency: '' }]);
    };

    const save = () => {
        const updatedData = {
            userId: localUser?.id,
            portfolioId,
            payload: laguages,
        };
        mutate(updatedData);
    };

    return (
        <>
            {laguages?.map((lanuage, index) => (
                <div key={index} className='flex flex-col gap-4'>
                    <input
                        type="text"
                        placeholder="language"
                        className='h-10 p-4 rounded-xl'
                        value={lanuage?.language}
                        onChange={(e) => handleChange(index, 'language', e.target.value)} />
                    <input
                        type="text"
                        placeholder="proficiency"
                        className='h-10 p-4 rounded-xl'
                        value={lanuage?.proficiency}
                        onChange={(e) => handleChange(index, 'proficiency', e.target.value)} />
                </div>
            ))}
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5'
                onClick={addProject}> Add More
            </button>
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                onClick={save}> Save
            </button>
        </>
    )
}

export default Language;
