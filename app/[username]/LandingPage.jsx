import Image from 'next/image'
import React from 'react'

const LandingPage = () => {
    const data = {
        name: 'Jack Gyllenhaal',
        title: 'Software Engineer',
        tagline: 'Actor who make you think screen is reality.',
    }
    return (
        <section className='flex w-full min-h-[calc(100vh-64px)] flex-col items-center justify-center'>
            <div className='w-full flex flex-col md:flex-row items-center justify-center md:justify-around gap-4 md:px-16'>
                <div className='flex items-center justify-center w-full overflow-hidden md:h-[500px]'>
                    <Image src={"/jack.webp"} width={300} height={300} alt="logo"
                        className='p-0 m-0 rounded-full md:h-full md:w-full size-24 object-cover md:rounded-2xl' />
                </div>
                <div className='flex flex-col items-center justify-center w-full'>
                    <h1 className='font-bold text-3xl md:text-5xl'>{data?.name}</h1>
                    <p className='text-gray-500 md:text-xl'>({data?.title})</p>
                    <p className='text-gray-500 md:text-xl md:mt-4'>{data?.tagline}</p>
                </div>
            </div>
        </section>
    )
}

export default LandingPage