'use client'
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section className='flex md:max-w-[1140px] w-full 2xl:max-w-[1440px] my-40 px-5 md:px-0'>
            <div className='grid md:grid-cols-2 gap-7 md:gap-0 items-center w-full'>
                <motion.h1
                    initial={{ x: -25, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className='text-4xl md:text-6xl 2xl:text-8xl font-black' >4+ YEAR OF EXPERIENCE</motion.h1>
                <div className='flex flex-col gap-7'>
                    {Array.from({ length: 3 }).map((_, i) => <motion.div
                        key={i}
                        initial={{ y: -25, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className='font-bold md:text-lg 2xl:text-2xl'>Google</div>
                        <div className='flex items-center justify-between text-sm md:text-base 2xl:text-xl text-gray-500'>
                            <span>SDE I</span>
                            <span>2023 - Present</span>
                        </div>
                    </motion.div>)}
                </div>
            </div>
        </section>
    )
}

export default Experience