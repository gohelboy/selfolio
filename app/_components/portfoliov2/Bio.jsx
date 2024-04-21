'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Bio = () => {
    return (
        <section className='flex flex-col items-center overflow-hidden w-full py-16 bg-gradient-to-t from-[#0f0f0f] to-[#454545] text-white'>
            <div className='w-full md:max-w-[1140px] 2xl:max-w-[1440px] flex flex-col gap-7 md:gap-12 px-4 md:px-0'>
                <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='text-4xl md:text-6xl 2xl:text-8xl font-black'>ME</motion.h1>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='text-sm md:text-base md:font-light 2xl:font-normal 2xl:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</motion.p>
            </div>
        </section>
    )
}

export default Bio