'use client'
import useGetLocalItem from "@/hooks/useGetLocalItem";
import { useEffect, useState } from "react";
import { usePostHobbies } from "../portfolioQueries";

const Hobby = ({ portfolioId, data }) => {

    const localUser = useGetLocalItem('user');
    const { mutate } = usePostHobbies(portfolioId);

    const [hobbies, setHobbies] = useState(data || [{ interestHobby: '' }]);

    useEffect(() => {
        setHobbies(data || [{ interestHobby: '' }]);
    }, [data]);

    const handleChange = (index, field, value) => {
        const updatedList = [...hobbies];
        updatedList[index][field] = value;
        setHobbies(updatedList);
    };

    const addEducation = () => {
        setHobbies([...hobbies, { interestHobby: '' }]);
    };

    const save = () => {
        const updatedData = {
            userId: localUser?.id,
            portfolioId,
            payload: hobbies,
        };
        mutate(updatedData);
    };

    return (
        <>
            {hobbies?.map((hobby, index) => (
                <div key={index} className='flex flex-col gap-4'>
                    <input type="text" placeholder="Hobby" className='h-10 p-4 rounded-xl'
                        value={hobby?.interestHobby}
                        onChange={(e) => handleChange(index, 'interestHobby', e.target.value)} />
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

export default Hobby;