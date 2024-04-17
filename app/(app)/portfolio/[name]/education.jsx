'use client'
import useGetLocalItem from "@/hooks/useGetLocalItem";
import { usePostEducation } from "../portfolioQueries";
import { useEffect, useState } from "react";

const Education = ({ portfolioId, data }) => {
    const localUser = useGetLocalItem('user');
    const { mutate } = usePostEducation(portfolioId);

    const [educationList, setEducationList] = useState(data || [{ degree: '', institution: '', graduationYear: '' }]);

    useEffect(() => {
        setEducationList(data || [{ degree: '', institution: '', graduationYear: '' }]);
    }, [data]);

    const handleChange = (index, field, value) => {
        const updatedList = [...educationList];
        updatedList[index][field] = value;
        setEducationList(updatedList);
    };

    const addEducation = () => {
        setEducationList([...educationList, { degree: '', institution: '', graduationYear: '' }]);
    };

    const save = () => {
        const updatedData = {
            userId: localUser?.id,
            portfolioId,
            payload: educationList,
        };
        mutate(updatedData);
    };

    return (
        <>
            {educationList?.map((education, index) => (
                <div key={index} className='flex flex-col gap-4'>
                    <input type="text" placeholder="Degree" className='h-10 p-4 rounded-xl' value={education?.degree} onChange={(e) => handleChange(index, 'degree', e.target.value)} />
                    <input type="text" placeholder="Institution" className='h-10 p-4 rounded-xl' value={education?.institution} onChange={(e) => handleChange(index, 'institution', e.target.value)} />
                    <input type="number" placeholder="Year" className='h-10 p-4 rounded-xl' value={education?.graduationYear} onChange={(e) => handleChange(index, 'graduationYear', e.target.value)} />
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
    );
};

export default Education;