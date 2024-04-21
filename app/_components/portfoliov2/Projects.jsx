'use client'
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const Projects = () => {
    const MotionImage = motion(Image);

    const rotateAnimation = {
        rotate: [0,
            90, 90, 90, 90,
            180, 180, 180, 180,
            270, 270, 270, 270,
            360, 360, 360, 360
        ],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "linear",
        },
    };

    return (
        <motion.section
            initial={{ width: 'fit-content' }}
            whileInView={{ width: "100%" }}
            viewport={{ amount: 0.5 }}
            className='flex justify-center rounded-3xl bg-[#ADFF26] my-40'>
            <div className='w-full rounded-3xl md:max-w-[1140px] 2xl:max-w-[1440px] bg-[#ADFF26] p-8 pb-16 flex flex-col gap-10'>
                <div className='flex items-center justify-between'>
                    <div>
                        <motion.h1
                            initial={{ x: -25, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ amount: 0.5 }} className='text-4xl md:text-6xl 2xl:text-8xl font-black'>PROJECTS</motion.h1>
                        <motion.p initial={{ y: 25, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ amount: 0.5 }} className='text-sm 2xl:text-xl'>
                            Here are the few selected works.
                        </motion.p>
                    </div>
                    <MotionImage
                        className="size-20 md:size-32 2xl:size-48"
                        whileInView={rotateAnimation}
                        viewport={{ amount: 0.5 }}
                        src={"/shine.svg"} width={200} height={200} alt="shine" />
                </div>
                <div className='flex flex-col gap-20'>
                    {Array.from({ length: 7 }).map((_, i) => {
                        const even = i % 2 === 0
                        return (
                            <div key={i} className={cn('flex flex-col justify-center items-center md:flex-row gap-6 2xl:gap-14', even ? 'md:flex-row' : 'md:flex-row-reverse')}>
                                <MotionImage initial={{ x: -25, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    src={"/p1.jpg"}
                                    width={600} height={600}
                                    alt="p1"
                                    className='rounded-2xl object-cover aspect-video cursor-pointer' />
                                <motion.div
                                    initial={{ x: 25, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    className='flex flex-col gap-4' >
                                    <h2 className={cn('font-semibold text-2xl 2xl:text-4xl', even ? 'md:text-left' : 'md:text-right')}> Project 1</h2>
                                    <p className='text-gray-700 text-sm 2xl:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className={cn('flex gap-2 flex-row-reverse  justify-between', even ? 'md:flex-row ' : 'md:flex-row-reverse')} >
                                        <Link href='#' className='bg-black text-white rounded-full h-fit p-2 hover:scale-110 transition-all'>
                                            <ArrowUpRight size={34} className={cn("md:size-7 2xl:size-9", even ? 'md:-rotate-90' : 'md:rotate-270')} />
                                        </Link>
                                        <div className={cn('flex flex-wrap items-center gap-2 ', even ? 'md:justify-end ' : 'md:justify-start')}>
                                            {Array.from({ length: 10 }).map((_, i) => <span key={i} className='py-0.5 2xl:py-1 px-1 2xl:px-2 hover:shadow-xl hover:scale-110 transition-all hover:bg-slate-100 border border-gray-900 hover:border-transparent text-gray-800 hover:text-gray-950 cursor-pointer rounded-full text-sm 2xl:text-base'>Reactjs</span>)}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </motion.section >
    )
}

export default Projects;