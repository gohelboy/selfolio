'use client'
import useGetLocalItem from "@/hooks/useGetLocalItem";
import { useEffect, useState } from "react";
import { usePostCertificates } from "../portfolioQueries";

const Ceritificate = ({ portfolioId, data }) => {
    const localUser = useGetLocalItem('user');
    const { mutate } = usePostCertificates(portfolioId);

    const [certificates, setCertificates] = useState(data || [{ certificationName: '', issuingOrganization: '', certificationDate: '' }]);

    useEffect(() => {
        setCertificates(data || [{ certificationName: '', issuingOrganization: '', certificationDate: '' }]);
    }, [data]);

    const handleChange = (index, field, value) => {
        const updatedList = [...certificates];
        updatedList[index][field] = value;
        setCertificates(updatedList);
    };

    const addProject = () => {
        setCertificates([...certificates, { certificationName: '', issuingOrganization: '', certificationDate: '' }]);
    };

    const save = () => {
        const updatedData = {
            userId: localUser?.id,
            portfolioId,
            payload: certificates,
        };
        mutate(updatedData);
    };

    return (
        <>
            {certificates?.map((certificate, index) => (
                <div key={index} className='flex flex-col gap-4'>
                    <input
                        type="text"
                        placeholder="certification Name"
                        className='h-10 p-4 rounded-xl'
                        value={certificate?.certificationName}
                        onChange={(e) => handleChange(index, 'certificationName', e.target.value)} />
                    <input
                        type="text"
                        placeholder="issuing Organization"
                        className='h-10 p-4 rounded-xl'
                        value={certificate?.issuingOrganization}
                        onChange={(e) => handleChange(index, 'issuingOrganization', e.target.value)} />
                    <input
                        type="text"
                        placeholder="certification Date"
                        className='h-10 p-4 rounded-xl'
                        value={certificate?.certificationDate}
                        onChange={(e) => handleChange(index, 'certificationDate', e.target.value)} />
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

export default Ceritificate;
