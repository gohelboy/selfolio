const Experience = () => {
    const data = [
        {
            company: 'Drive - Google LLC',
            role: 'SDE Intern',
            year: '2022'
        }, {
            company: 'Drive - Google LLC',
            role: 'SDE Intern',
            year: '2022'
        }, {
            company: 'Drive - Google LLC',
            role: 'SDE Intern',
            year: '2022'
        }
    ];
    return (
        <section className='mt-10 mx-5 md:w-[1080px]'>
            <div className='flex flex-col gap-5 w-full '>
                <h2 className='font-semibold text-xl'>Experience</h2>
                <div className='flex flex-col gap-2'>
                    {data?.map((exp, i) => {
                        return <div key={i} className='flex flex-col'>
                            <div>{exp.company}</div>
                            <div className='flex items-center justify-between text-gray-500 text-sm'>
                                <p>{exp.role}</p>
                                <p>{exp.year}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience