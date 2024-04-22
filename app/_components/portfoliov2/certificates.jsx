'use client'
import { ArrowDownToLine, BadgeCheckIcon } from 'lucide-react'
import { motion } from "framer-motion";

const Certificates = () => {
    return (
        <section className='px-4 md:p-0flex md:max-w-[1140px] w-full 2xl:max-w-[1440px] my-40'>
            <div className='flex flex-col gap-14 w-full'>
                <motion.h1
                    initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                    className='text-4xl md:text-6xl 2xl:text-8xl font-black' >CERTIFICATES</motion.h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                            initial={{ y: "100px", opacity: 0 }}
                            whileInView={{ y: "0px", opacity: 1 }}
                            transition={{ delay: 0.1 * i }}
                            viewport={{ once: true }}
                            key={i} className='group bg-slate-50 border hover:border-transparent hover:bg-slate-100 hover:shadow-md md:h-44 2xl:h-64 justify-between p-4 2xl:p-5 rounded-2xl flex flex-col'>
                            <div>
                                <h3 className='font-semibold md:text-lg 2xl:text-2xl'>ML Crash Course</h3>
                                <div className='flex items-center gap-1 text-gray-500 group-hover:text-blue-500'>
                                    <BadgeCheckIcon className='size-4 md:size-5 2xl:size-6' />
                                    <span className='text-sm md:text-base 2xl:text-xl'>Google</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className='text-base 2xl:text-xl text-gray-500'>2021</span>
                                <button className='bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-500 transition-all'>
                                    <ArrowDownToLine className='size-4 2xl:size-6' />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certificates