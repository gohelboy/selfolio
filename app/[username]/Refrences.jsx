import { CircleUser, Mail, Phone } from 'lucide-react'
import React from 'react'

const Refrences = () => {
    return (
        <section className='pt-10 px-5 md:mx-0 w-full md:max-w-[1140px] 2xl:max-w-[1440px] flex items-center justify-center'>
            <div className='flex flex-col gap-5 w-full '>
                <h2 className='font-semibold text-xl'>Refrences</h2>
                <div className='grid md:flex md:flex-wrap grid-cols-2 md:grid-cols-5 gap-2 md:gap-x-7 gap-y-7'>
                    <div className='flex flex-col gap-1 text-lg'>
                        <CircleUser />
                        <div className='flex flex-col'>
                            <span>Sundar Picahi</span>
                            <span className='text-sm text-gray-500'>(CEO of Google)</span>
                        </div>
                        <div className='flex gap-2'>
                            <Mail />
                            <Phone />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 text-lg'>
                        <CircleUser />
                        <div className='flex flex-col'>
                            <span>Sundar Picahi</span>
                            <span className='text-sm text-gray-500'>(CEO of Google)</span>
                        </div>
                        <div className='flex gap-2'>
                            <Mail />
                            <Phone />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 text-lg'>
                        <CircleUser />
                        <div className='flex flex-col'>
                            <span>Sundar Picahi</span>
                            <span className='text-sm text-gray-500'>(CEO of Google)</span>
                        </div>
                        <div className='flex gap-2'>
                            <Mail />
                            <Phone />
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Refrences