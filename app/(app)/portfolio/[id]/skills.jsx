'use client'
import useGetLocalItem from "@/hooks/useGetLocalItem";
import { useEffect, useState } from "react";
import { usePostSkills } from "../portfolioQueries";

const Skills = ({ portfolioId, data }) => {

    const localUser = useGetLocalItem('user');
    const { mutate } = usePostSkills(portfolioId);

    const [skills, setSkills] = useState(data || [{ name: '' }]);

    useEffect(() => {
        setSkills(data || [{ name: '' }]);
    }, [data]);

    const handleChange = (index, field, value) => {
        const updatedList = [...skills];
        updatedList[index][field] = value;
        setSkills(updatedList);
    };

    const addEducation = () => {
        setSkills([...skills, { name: '' }]);
    };

    const save = () => {
        const updatedData = {
            userId: localUser?.id,
            portfolioId,
            payload: skills,
        };
        mutate(updatedData);
    };

    return (
        <>
            {skills?.map((skill, index) => (
                <div key={index} className='flex flex-col gap-4'>
                    <input
                        type="text"
                        placeholder="Skill name"
                        className='h-10 p-4 rounded-xl'
                        value={skill?.name}
                        onChange={(e) => handleChange(index, 'name', e.target.value)} />
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

export default Skills;