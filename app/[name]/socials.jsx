import { Github, Link as LinkIcon, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Socials = ({ data }) => {
    console.log(data)
    return (
        <section id='contact' className='pt-10 px-5 w-full md:max-w-[1140px] 2xl:max-w-[1440px]'>
            <div className='flex flex-col gap-5 w-full '>
                <h2 className='font-semibold text-xl'>Connect with me</h2>
                <div className='flex gap-3'>
                    <Link href={`mailto:${data?.email}`} className='bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-500 transition-all flex items-center gap-1'>
                        <Phone />Phone</Link>
                    <Link href={data?.email || ""} className='bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-500 transition-all flex items-center gap-1'>
                        <Mail />Email</Link>
                    <Link href={data?.linkedIn || ''} className='bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-500 transition-all flex items-center gap-1'>
                        <Linkedin />Linkedin</Link>
                    <Link href={data?.github || ''} className='bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-500 transition-all flex items-center gap-1'>
                        <Github />Github</Link>
                    <Link href={data?.twitter || ''} className='bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-500 transition-all flex items-center gap-1'>
                        <Twitter />Twitter</Link>
                    <Link href={data?.other || ''} className='bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-500 transition-all flex items-center gap-1'>
                        <LinkIcon />Other</Link>
                </div>
            </div>
        </section>
    )
}

export default Socials