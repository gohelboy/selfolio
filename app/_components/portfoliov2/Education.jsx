'use client'
import React from 'react'
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section className='flex w-full md:max-w-[1140px] 2xl:max-w-[1440px] my-40'>
            <div className='grid grid-cols-2 items-center w-full'>
                <motion.h1
                    initial={{ x: -25, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                    className='md:text-6xl 2xl:text-8xl font-black' >EDUCATION</motion.h1>
                <div className='flex flex-col gap-7'>
                    {Array.from({ length: 2 }).map((_, i) => <motion.div
                        key={i}
                        initial={{ y: -25, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className='font-bold md:text-lg 2xl:text-2xl'>MCA - Master of Computer Application</div>
                        <div className='flex items-center justify-between md:text-base 2xl:text-xl text-gray-500'>
                            <span>GTU - Gujarat Technological University</span>
                            <span>2022</span>
                        </div>
                    </motion.div>)}
                </div>
            </div>
        </section>
    )
}

export default Education