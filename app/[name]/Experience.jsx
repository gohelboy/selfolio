const Experience = ({ data }) => {
    return (
        <section className='pt-10 px-5 w-full md:max-w-[1140px] 2xl:max-w-[1440px]'>
            <div className='flex flex-col gap-5 w-full '>
                <h2 className='font-semibold text-xl'>Experience</h2>
                <div className='flex flex-col gap-2'>
                    {data?.map((exp, i) => {
                        return <div key={i} className='flex flex-col'>
                            <div>{exp?.companyName}</div>
                            <div className='flex items-center justify-between text-gray-500 text-sm'>
                                <p>{exp?.jobTitle}</p>
                                <p>{exp?.employmentDates}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience