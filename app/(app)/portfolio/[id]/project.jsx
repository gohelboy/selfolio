'use client'
import useGetLocalItem from "@/hooks/useGetLocalItem";
import { useEffect, useState } from "react";
import { usePostProjectImage, usePostProjects } from "../portfolioQueries";
import { queryClient } from "@/app/_components/QueryProviderWrapper";

const Project = ({ portfolioId, data }) => {
    const localUser = useGetLocalItem('user');
    const { mutate } = usePostProjects(portfolioId);

    const onUploadProjectImageConfig = {
        onSuccess: (res) => {
            const updatedList = [...projects];
            updatedList[res?.data?.projectIndex]['projectImage'] = res?.data?.imageUrl;
        }
    }

    const { mutate: uploadProjectImage } = usePostProjectImage(onUploadProjectImageConfig);

    const [projects, setProjects] = useState(data || [{ projectName: '', description: '', technologiesUsed: [], projectLink: '', projectImage: '' }]);

    useEffect(() => {
        setProjects(data || [{ projectName: '', description: '', technologiesUsed: [], projectLink: '', projectImage: '' }]);
    }, [data]);

    const handleChange = (index, field, value) => {
        const updatedList = [...projects];
        if (field === 'technologiesUsed') {
            updatedList[index][field] = value.split(' ');
        } else {
            updatedList[index][field] = value;
        }
        setProjects(updatedList);
    };

    const addProject = () => {
        setProjects([...projects, { projectName: '', description: '', technologiesUsed: [], projectLink: '', projectImage: '' }]);
    };

    const save = () => {
        const updatedData = {
            userId: localUser?.id,
            portfolioId,
            payload: projects,
        };
        mutate(updatedData);
    };

    const handleImageChange = async (index, name, event) => {
        const image = event?.target?.files?.[0];
        if (!image) return;
        const formData = new FormData();
        formData.append(name, image);
        formData.append('portfolioId', portfolioId);
        formData.append('userId', localUser?.id);
        formData.append('projectIndex', index);
        uploadProjectImage(formData)
    }

    return (
        <>
            {projects?.map((project, index) => (
                <div key={index} className='flex flex-col gap-4'>
                    <input
                        type="text"
                        placeholder="Project name"
                        className='h-10 p-4 rounded-xl'
                        value={project?.projectName}
                        onChange={(e) => handleChange(index, 'projectName', e.target.value)} />
                    <input
                        type="text"
                        placeholder="Description"
                        className='h-10 p-4 rounded-xl'
                        value={project?.description}
                        onChange={(e) => handleChange(index, 'description', e.target.value)} />
                    <input
                        type="text"
                        placeholder="Technologies used"
                        className='h-10 p-4 rounded-xl'
                        value={project?.technologiesUsed.join(' ')}
                        onChange={(e) => handleChange(index, 'technologiesUsed', e.target.value)} />
                    <input
                        type="text"
                        placeholder="Projects Line"
                        className='h-10 p-4 rounded-xl'
                        value={project?.projectLink}
                        onChange={(e) => handleChange(index, 'projectLink', e.target.value)} />
                    <input
                        type="file"
                        accept="image/*"
                        className='h-10 p-4 rounded-xl'
                        onChange={(e) => handleImageChange(index, 'projectImage', e)} />
                </div>
            ))}
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5'
                onClick={addProject}>
                Add More Project
            </button>
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                onClick={save}>
                Save
            </button>
        </>
    )
}

export default Project;
