'use client'
import useGetLocalItem from "@/hooks/useGetLocalItem";
import { useEffect, useState } from "react";
import { usePostHobbies, usePostRefrences } from "../portfolioQueries";

const Refrence = ({ portfolioId, data }) => {

    const localUser = useGetLocalItem('user');
    const { mutate } = usePostRefrences(portfolioId);

    const [hobbies, setHobbies] = useState(data || [{ name: '', email: '', phoneNumber: '' }]);

    useEffect(() => {
        setHobbies(data || [{ name: '', email: '', phoneNumber: '' }]);
    }, [data]);

    const handleChange = (index, field, value) => {
        const updatedList = [...hobbies];
        updatedList[index][field] = value;
        setHobbies(updatedList);
    };

    const addEducation = () => {
        setHobbies([...hobbies, { name: '', email: '', phoneNumber: '' }]);
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
                    <input type="text" placeholder="name" className='h-10 p-4 rounded-xl'
                        value={hobby?.name}
                        onChange={(e) => handleChange(index, 'name', e.target.value)} />
                    <input type="text" placeholder="email" className='h-10 p-4 rounded-xl'
                        value={hobby?.email}
                        onChange={(e) => handleChange(index, 'email', e.target.value)} />
                    <input type="text" placeholder="phoneNumber" className='h-10 p-4 rounded-xl'
                        value={hobby?.phoneNumber}
                        onChange={(e) => handleChange(index, 'phoneNumber', e.target.value)} />
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

export default Refrence;