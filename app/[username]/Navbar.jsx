import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav id='me' className='h-16 bg-slate-400 flex items-center justify-center px-8 w-full'>
            <div className='flex items-center justify-between w-full md:px-10 2xl:px-20'>
                <div className='font-bold text-2xl'>LOGO</div>
                <div className='hidden md:block'>
                    <ul className='flex gap-7'>
                        <Link href='#me'>Me</Link>
                        <Link href='#skills'>Skills</Link>
                        <Link href='#projects'>Projects</Link >
                        <Link href='#contact'>Contact</Link >
                    </ul>
                </div>
                <div className='md:hidden'>
                    <button className='flex items-center justify-center'>
                        <Menu />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar