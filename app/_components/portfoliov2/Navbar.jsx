'use client';
import { Moon, Sun, SunMedium } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const Navbar = ({ theme, setTheme }) => {
    const { scrollYProgress } = useScroll();
    const [referenceWidth, setReferenceWidth] = useState(1480);

    useEffect(() => {
        const reference = document.getElementById('refrence');
        if (reference) {
            setReferenceWidth(reference.clientWidth);
        }
        !theme && localStorage.setItem('theme', 'dark');
    }, []);


    const changeThemeMode = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', theme);
    }

    const navWidth = useTransform(scrollYProgress, [0, 0.05], [`${referenceWidth}px`, '300px']);
    const navTop = useTransform(scrollYProgress, [0, 0.01], ["12px", "18px"]);
    const bgColor = useTransform(scrollYProgress, [0, 0.05], ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 0.5)']);
    const darkbgColor = useTransform(scrollYProgress, [0, 0.05], ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']);

    return (
        <motion.nav
            style={{ top: navTop, width: navWidth, transition: "all 0s linear " }}
            transition={{ duration: 0.3 }}
            className={cn('flex items-center justify-center min-w-fit w-full px-4 md:px-0 md:max-w-[1140px] 2xl:max-w-[1480px] fixed z-40', theme === 'dark' ? 'text-white' : 'text-black')}
        >
            <motion.div
                className="p-2 px-4 flex items-center justify-between gap-7 md:gap-12 w-full backdrop-blur-sm rounded-full"
                style={{ backgroundColor: theme === 'dark' ? darkbgColor : bgColor }}
            >
                <Image src={"/logo.svg"} width={42} height={42} alt="logo" className="size-8 2xl:size-10" />
                <ul className="flex items-center justify-center gap-3 md:gap-7 text-sm md:text-base 2xl:text-xl">
                    <Link href={'#skills'}>Skills</Link>
                    <Link href={'#projects'}>Projects</Link>
                    <Link href={'#contact'}>Contact</Link>
                </ul>
                <button className="flex items-center justify-end md:flex-1">
                    {theme === 'dark' ?
                        <Sun fill="white" className="size-5 2xl:size-6" onClick={changeThemeMode} />
                        :
                        <Moon fill="black" className="size-5 2xl:size-6" onClick={changeThemeMode} />}
                </button>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
