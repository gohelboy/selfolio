import React from 'react'

const Bio = () => {
    const data = {
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }
    return (
        <section className='flex mx-5 md:w-[1080px]'>
            <p className='text-justify text-sm'>{data?.bio}</p>
        </section>
    )
}

export default Bio