'use client';
import { Moon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const { scrollYProgress } = useScroll();
    const referenceRef = useRef(null);
    const [referenceWidth, setReferenceWidth] = useState(1480);

    useEffect(() => {
        const reference = document.getElementById('refrence');
        if (reference) {
            setReferenceWidth(reference.clientWidth);
        }
    }, []);

    const navWidth = useTransform(scrollYProgress, [0, 0.05], [`${referenceWidth}px`, '300px']);
    const navTop = useTransform(scrollYProgress, [0, 0.01], ["12px", "18px"]);
    const bgColor = useTransform(scrollYProgress, [0, 0.05], ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 0.5)']);

    return (
        <motion.nav
            style={{ top: navTop, width: navWidth, transition: "all 0s linear " }}
            transition={{ duration: 0.3 }}
            className={cn('flex items-center justify-center min-w-fit w-full px-4 md:px-0 md:max-w-[1140px] 2xl:max-w-[1480px] fixed z-40')}

        >
            <motion.div
                className="p-2 px-4 flex items-center justify-between gap-7 md:gap-12 w-full backdrop-blur-sm rounded-full"
                style={{ backgroundColor: bgColor }}
            >
                <Image src={"/logo.svg"} width={42} height={42} alt="logo" className="size-8 2xl:size-10" />
                <ul className="flex items-center justify-center gap-3 md:gap-7 text-sm md:text-base 2xl:text-xl">
                    <Link href={'#'}>Skills</Link>
                    <Link href={'#'}>Projects</Link>
                    <Link href={'#'}>Contact</Link>
                </ul>
                <button className="flex items-center justify-end md:flex-1">
                    <Moon fill="black" className="size-5 2xl:size-6" />
                </button>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;