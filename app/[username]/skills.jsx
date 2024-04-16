import React from 'react'

const Skills = () => {
    return (
        <section id='skills' className='pt-10  px-5 w-full md:max-w-[1140px] 2xl:max-w-[1440px]'>
            <div className='flex flex-col gap-3 w-full'>
                <h2 className='font-semibold text-xl'>Skill-Set</h2>
                <div className='flex flex-col md:grid md:grid-cols-3 gap-3'>
                    <div className='flex flex-col gap-3 bg-neutral-200 p-4 rounded-2xl'>
                        <div className='flex flex-col gap-2 font-semibold'>Frontend</div>
                        <div className='flex flex-wrap gap-1'>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Tailwind</span>
                            <span>Next</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Tailwind</span>
                            <span>Next</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Tailwind</span>
                            <span>Next</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 bg-neutral-200 p-4 rounded-2xl'>
                        <div className='flex flex-col gap-2 font-semibold'>Backend</div>
                        <div className='flex flex-wrap gap-1'>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Tailwind</span>
                            <span>Next</span>
                            <span>HTML</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 bg-neutral-200 p-4 rounded-2xl'>
                        <div className='flex flex-col gap-2 font-semibold'>Tools</div>
                        <div className='flex flex-wrap gap-1'>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Tailwind</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills