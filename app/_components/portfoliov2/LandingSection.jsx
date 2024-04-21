'use client'
import { ArrowUpFromDot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

const LandingSection = () => {
    const { scrollYProgress } = useScroll()
    const MotionImage = motion(Image);

    // Use the useTransform hook to calculate the rotation based on the scroll progress
    const rotate = useTransform(scrollYProgress, [0, 0.05], [0, 180])

    return (
        <section className='flex flex-col h-screen overflow-hidden w-full md:max-w-[1140px] 2xl:max-w-[1440px] relative'>
            <div className=' mt-24 h-full grid gap-7' style={{ gridTemplateColumns: "1.1fr 1fr" }}>
                <div className='w-full flex flex-col justify-center relative'>
                    <div className=' flex flex-col gap-2 md:text-5xl 2xltext-7xl'>
                        <motion.div
                            initial={{ x: -24, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className='flex items-center gap-2'
                        >
                            <h1>Hey there</h1>
                            <Image src={"/wave.png"} width={70} height={70} alt="wave" className='md:size-12 2xl:size-14' />
                        </motion.div>
                        <div className='flex gap-4'>
                            <motion.h1
                                className=''
                                initial={{ x: -25, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
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
                            className='md:text-lg 2xl:text-2xl text-gray-500'
                        >
                            Software Developer & Musician
                        </motion.p>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className='absolute md:bottom-10  2xl:bottom-20 left-0 text-gray-500 md:text-sm 2xl:text-base'
                    >
                        Making Possibilities into reality.
                    </motion.p>
                </div>
                <MotionImage
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    src={"/stock.jpg"}
                    width={700}
                    height={700}
                    alt="Me"
                    className='md:aspect-[10/9.5] 2xl:aspect-[10/11.5] object-cover rounded-3xl object-top'
                />
            </div>
            <div className='bg-[#454545] absolute -bottom-1 left-1/2 rounded-t-full'>
                <motion.div style={{ rotate }}>
                    <ArrowUpFromDot className='text-white md:mx-2 2xl:mx-4 md:my-2.5 2xl:my-5' />
                </motion.div>
            </div>
        </section>
    )
}

export default LandingSection