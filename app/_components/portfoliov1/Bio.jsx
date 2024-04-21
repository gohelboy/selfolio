import React from 'react'

const Bio = ({ data }) => {
    return (
        <section className='flex px-5 w-full  md:max-w-[1140px] 2xl:max-w-[1440px]'>
            <p className='text-justify text-sm 2xl:text-lg'>{data}</p>
        </section>
    )
}

export default Bio