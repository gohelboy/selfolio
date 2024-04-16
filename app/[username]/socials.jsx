import { Github, Link, Linkedin, Mail, Twitter } from 'lucide-react'
import React from 'react'

const Socials = () => {
    return (
        <section id='contact' className='pt-10 px-5 w-full md:max-w-[1140px] 2xl:max-w-[1440px]'>
            <div className='flex flex-col gap-5 w-full '>
                <h2 className='font-semibold text-xl'>Connect with me</h2>
                <div className='flex gap-3'>
                    <Mail className='cursor-pointer' />
                    <Linkedin className='cursor-pointer' />
                    <Github className='cursor-pointer' />
                    <Twitter className='cursor-pointer' />
                    <Link className='cursor-pointer' />
                </div>
            </div>
        </section>
    )
}

export default Socials