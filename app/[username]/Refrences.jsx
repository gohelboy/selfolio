import { CircleUser, Mail, Phone } from 'lucide-react'
import React from 'react'

const Refrences = () => {
    return (
        <section className='mt-10 mx-5 md:mx-0 md:w-[1080px] flex items-center justify-center'>
            <div className='flex flex-col gap-5 w-full md:items-center'>
                <h2 className='font-semibold text-xl'>Refrences</h2>
                <div className='grid md:flex md:flex-wrap grid-cols-2 md:grid-cols-5 gap-2 md:gap-x-7 gap-y-7 md:items-center md:justify-center'>
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