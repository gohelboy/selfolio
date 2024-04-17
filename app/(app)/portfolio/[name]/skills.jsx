import React, { useState, useEffect } from 'react';
import useGetLocalItem from "@/hooks/useGetLocalItem";
import { usePostSkills } from "../portfolioQueries";

const Skills = ({ portfolioId, data }) => {
    const localUser = useGetLocalItem('user');
    const { mutate } = usePostSkills(portfolioId);

    const [skillsData, setSkillsData] = useState(data || []);

    useEffect(() => {
        setSkillsData(data || []);
    }, [data]);

    const handleChangeSkillType = (index, value) => {
        const updatedSkillsData = [...skillsData];
        updatedSkillsData[index].skillType = value;
        setSkillsData(updatedSkillsData);
    };

    const handleChangeSkillName = (skillTypeIndex, nameIndex, value) => {
        const updatedSkillsData = [...skillsData];
        updatedSkillsData[skillTypeIndex].names[nameIndex] = value;
        setSkillsData(updatedSkillsData);
    };

    const addSkillType = () => {
        setSkillsData([...skillsData, { skillType: '', names: [''] }]);
    };

    const addSkillName = (skillTypeIndex) => {
        const updatedSkillsData = [...skillsData];
        updatedSkillsData[skillTypeIndex].names.push('');
        setSkillsData(updatedSkillsData);
    };

    const removeSkillType = (index) => {
        const updatedSkillsData = [...skillsData];
        updatedSkillsData.splice(index, 1);
        setSkillsData(updatedSkillsData);
    };

    const removeSkillName = (skillTypeIndex, nameIndex) => {
        const updatedSkillsData = [...skillsData];
        updatedSkillsData[skillTypeIndex].names.splice(nameIndex, 1);
        setSkillsData(updatedSkillsData);
    };

    const saveSkills = () => {
        const updatedData = {
            userId: localUser?.id,
            portfolioId,
            payload: skillsData,
        };
        mutate(updatedData);
    };

    return (
        <div>
            {skillsData.map((skillType, skillTypeIndex) => (
                <div key={skillTypeIndex}>
                    <input
                        className='h-10 p-4 rounded-xl'
                        type="text"
                        placeholder="Skill Type"
                        value={skillType.skillType}
                        onChange={(e) => handleChangeSkillType(skillTypeIndex, e.target.value)}
                    />
                    {skillType.names.map((name, nameIndex) => (
                        <div key={`${skillTypeIndex}-${nameIndex}`}>
                            <input
                                className='h-10 p-4 rounded-xl'
                                type="text"
                                placeholder="Skill name"
                                value={name}
                                onChange={(e) => handleChangeSkillName(skillTypeIndex, nameIndex, e.target.value)}
                            />
                            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => removeSkillName(skillTypeIndex, nameIndex)}>Remove Skill</button>
                        </div>
                    ))}
                    <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' onClick={() => addSkillName(skillTypeIndex)}>Add Skill</button>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => removeSkillType(skillTypeIndex)}>Remove Skill Type</button>
                </div>
            ))}
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' onClick={addSkillType}>Add Skill Type</button>
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' onClick={saveSkills}>Save Skills</button>
        </div>
    );
};

export default Skills;
