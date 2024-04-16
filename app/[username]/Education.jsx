const Education = () => {
    const data = [
        {
            course: 'MCA - Master of computer application',
            university: 'GTU - Gujarat technological university',
            year: '2023'
        }, {
            course: 'MCA - Master of computer application',
            university: 'GTU - Gujarat technological university',
            year: '2023'
        }
    ];
    return (
        <section className='flex px-5 pt-10 w-full md:max-w-[1140px] 2xl:max-w-[1440px]'>
            <div className='flex flex-col gap-5 w-full '>
                <h2 className='font-semibold text-xl'>Education</h2>
                <div className='flex flex-col gap-2'>
                    {data?.map((edu, i) => {
                        return <div key={i} className='flex flex-col'>
                            <div>{edu.course}</div>
                            <div className='flex items-center justify-between text-gray-500 text-sm'>
                                <p>{edu.university}</p>
                                <p>{edu.year}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Education