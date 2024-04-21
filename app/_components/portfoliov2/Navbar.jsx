'use client'
import { Moon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

const Navbar = () => {
    const { scrollYProgress } = useScroll()
    const minWidth = 450
    const maxWidth = 1480

    const navWidth = useTransform(scrollYProgress, [0, 0.2], [maxWidth, minWidth])
    const bgColor = useTransform(scrollYProgress, [0, 0.2], ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 0.5)'])

    return (
        <motion.nav
            style={{
                width: navWidth, // Use the motion.value for dynamic width
            }}
            transition={{
                duration: 0.3,
            }}
            className={cn('flex items-center justify-center w-full md:max-w-[1140px] 2xl:max-w-[1480px] top-3 fixed z-40')}
        >
            <motion.div
                className="p-2 px-4 flex items-center justify-between w-full backdrop-blur-sm rounded-full "
                style={{ backgroundColor: bgColor, }}
            >
                <div className="flex items-center justify-center gap-20">
                    <Image src={"/logo.svg"} width={42} height={42} alt="logo" className='md:size-8 2xl:size-10' />
                    <ul className="flex items-center gap-7 md:text-base 2xl:text-xl">
                        <Link href={'#'}>Skills</Link>
                        <Link href={'#'}>Projects</Link>
                        <Link href={'#'}>Contact</Link>
                    </ul>
                </div>
                <button>
                    <Moon fill="black" className='md:size-5 2xl:size-6' />
                </button>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar