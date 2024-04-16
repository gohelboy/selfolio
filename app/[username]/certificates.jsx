import { ArrowDownToLine } from 'lucide-react'
import React from 'react'

const Certificates = () => {
    return (
        <section className='mt-10 mx-5 md:w-[1080px]'>
            <div className='flex flex-col gap-5 w-full '>
                <h2 className='font-semibold text-xl'>Cerificates</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-2 p-3 bg-neutral-200 rounded-2xl'>
                        <div className='flex flex-col'>
                            <div className='font-semibold'>ML Course</div>
                            <span>Google</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>2022</span>
                            <button className='bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-500 transition-all'><ArrowDownToLine /></button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-3 bg-neutral-200 rounded-2xl'>
                        <div className='flex flex-col'>
                            <div className='font-semibold'>ML Course</div>
                            <span>Google</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>2022</span>
                            <button className='bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-500 transition-all'><ArrowDownToLine /></button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-3 bg-neutral-200 rounded-2xl'>
                        <div className='flex flex-col'>
                            <div className='font-semibold'>ML Course</div>
                            <span>Google</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>2022</span>
                            <button className='bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-500 transition-all'><ArrowDownToLine /></button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-3 bg-neutral-200 rounded-2xl'>
                        <div className='flex flex-col'>
                            <div className='font-semibold'>ML Course</div>
                            <span>Google</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>2022</span>
                            <button className='bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-500 transition-all'><ArrowDownToLine /></button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-3 bg-neutral-200 rounded-2xl'>
                        <div className='flex flex-col'>
                            <div className='font-semibold'>ML Course</div>
                            <span>Google</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>2022</span>
                            <button className='bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-500 transition-all'><ArrowDownToLine /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates