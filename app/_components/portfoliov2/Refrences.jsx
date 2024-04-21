'use client'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

const Refrences = () => {
    return (
        <section className='flex w-full md:max-w-[1140px] 2xl:max-w-[1440px] my-40'>
            <div className='flex flex-col gap-14 w-full'>
                <motion.h1
                    initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                    className='md:text-6xl 2xl:text-8xl font-black'>REFRENCES</motion.h1>
                <div className='grid grid-cols-3 gap-6'>
                    {Array.from({ length: 3 }).map((_, i) => <motion.div
                        key={i}
                        initial={{ x: "-100px", opacity: 0 }}
                        whileInView={{ x: "0px", opacity: 1 }}
                        transition={{ delay: 0.1 * i }}
                        className='group border-l-8 border-l-[#ADFF26] bg-slate-50 border  items-center justify-between p-5 rounded-2xl flex'>
                        <div>
                            <h4 className='font-semibold md:text-lg 2xl:text-2xl'>Sundar Pichai</h4>
                            <span className='text-gray-500 md:text-sm 2xl:text-lg'>CEO google</span>
                        </div>
                        <div className='flex gap-2'>
                            <Link className='bg-slate-700 text-white p-2 rounded-full hover:bg-slate-500 transition-all' href={`mailto:${'test@gmail.com'}`}>
                                <Mail />
                            </Link>
                            <Link className='bg-slate-700 text-white p-2 rounded-full hover:bg-slate-500 transition-all' href={`tel:${'123456789'}`}>
                                <Phone />
                            </Link>
                        </div>
                    </motion.div>)}
                </div>
            </div>
        </section>
    )
}

export default Refrences