'use client'
import useGetLocalItem from "@/hooks/useGetLocalItem";
import { useEffect, useState } from "react";
import { usePostExpirence } from "../portfolioQueries";

const Experience = ({ portfolioId, data }) => {

    const localUser = useGetLocalItem('user');
    const { mutate } = usePostExpirence(portfolioId);

    const [experiences, setExperiences] = useState(data || [{ jobTitle: '', companyName: '', employmentDates: '' }]);

    useEffect(() => {
        setExperiences(data || [{ jobTitle: '', companyName: '', employmentDates: '' }]);
    }, [data]);

    const handleChange = (index, field, value) => {
        const updatedList = [...experiences];
        updatedList[index][field] = value;
        setExperiences(updatedList);
    };

    const addEducation = () => {
        setExperiences([...experiences, { jobTitle: '', companyName: '', employmentDates: '' }]);
    };

    const save = () => {
        const updatedData = {
            userId: localUser?.id,
            portfolioId,
            payload: experiences,
        };
        mutate(updatedData);
    };

    return (
        <>
            {experiences?.map((experience, index) => (
                <div key={index} className='flex flex-col gap-4'>
                    <input type="text" placeholder="Job title" className='h-10 p-4 rounded-xl' value={experience?.jobTitle} onChange={(e) => handleChange(index, 'jobTitle', e.target.value)} />
                    <input type="text" placeholder="Company / Organization" className='h-10 p-4 rounded-xl' value={experience?.companyName} onChange={(e) => handleChange(index, 'companyName', e.target.value)} />
                    <input type="text" placeholder="Start date" className='h-10 p-4 rounded-xl' value={experience?.employmentDates} onChange={(e) => handleChange(index, 'employmentDates', e.target.value)} />
                </div>))}
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                onClick={addEducation}>
                Add More
            </button>
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                onClick={save}>
                Save
            </button>
        </>
    )
}

export default Experience;