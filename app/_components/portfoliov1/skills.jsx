import React from 'react'

const Skills = ({ data }) => {
    return (
        <section id='skills' className='pt-10  px-5 w-full md:max-w-[1140px] 2xl:max-w-[1440px]'>
            <div className='flex flex-col gap-3 w-full'>
                <h2 className='font-semibold text-xl'>Skill-Set</h2>
                <div className='flex flex-col md:grid md:grid-cols-3 gap-3'>
                    {data?.map((skill, i) => <div key={i} className='flex flex-col gap-3 bg-neutral-200 p-4 rounded-2xl'>
                        <div className='flex flex-col gap-2 font-semibold'>{skill?.skillType}</div>
                        <div className='flex flex-wrap gap-1'>
                            {skill?.names?.map((name, i) => <span key={i}>{name}</span>)}
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default Skills