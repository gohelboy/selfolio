'use client'
import { ArrowUpFromDot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from '@/lib/utils'

const LandingSection = ({ theme }) => {
    const { scrollYProgress } = useScroll()
    const rotate = useTransform(scrollYProgress, [0, 0.05], [0, 180]);

    return (
        <section id='refrence' className='flex flex-col justify-center h-dvh overflow-hidden w-full md:max-w-[1140px] 2xl:max-w-[1440px] relative px-4 md:px-0'>
            <div className=' md:mt-20  gap-7 flex flex-col-reverse items-center justify-center md:grid md:pv2-landing-layout'>
                <div className='w-full h-full  flex flex-col justify-center relative'>
                    <div className='flex items-center md:items-baseline flex-col gap-2 text-3xl md:text-5xl 2xl:text-7xl'>
                        <motion.div
                            initial={{ x: -24, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className='flex items-center gap-2'
                        >
                            <h1>Hey there</h1>
                            <Image src={"/wave.png"} width={70} height={70} alt="wave" className='size-10 md:size-12 2xl:size-14' />
                        </motion.div>
                        <div className='flex gap-1.5 md:gap-4'>
                            <motion.h1
                                initial={{ x: -25, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="text-nowrap"
                            >
                                I am
                            </motion.h1>
                            <motion.span
                                className='font-black italic'
                                initial={{ y: 25, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                Jack Gyllenhaal
                            </motion.span>
                        </div>
                        <motion.p
                            initial={{ y: -25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className='text-lg 2xl:text-2xl text-gray-500'
                        >
                            Software Developer & Musician
                        </motion.p>
                    </div>
                </div>
                <div className='flex items-center md:justify-end'>
                    <Image
                        src={"/stock.jpg"}
                        width={600}
                        height={600}
                        alt="Me"
                        className='rounded-full size-32 md:size-fit md:rounded-3xl md:aspect-[10/9.5] 2xl:aspect-[10/11.5] object-cover'
                    />
                </div>
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className='absolute text-center md:text-left w-full bottom-12 md:bottom-20 left-0 text-gray-500 text-sm 2xl:text-base'
            >
                Making Possibilities into reality.
            </motion.p>
            <div className={cn('bg-[#454545] absolute -bottom-1 -translate-x-1/2 left-1/2 rounded-t-full', theme === 'dark' ? 'bg-[#f2f2f2]' : 'bg-[#454545]')}>
                <motion.div style={{ rotate }}>
                    <ArrowUpFromDot className={cn('text-white mx-4 my-2 md:mx-2 2xl:mx-4 md:my-2.5 2xl:my-5', theme === 'dark' ? 'text-black' : 'text-white')} />
                </motion.div>
            </div>
        </section>
    )
}

export default LandingSection