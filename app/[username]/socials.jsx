import { Github, Link, Linkedin, Mail, Twitter } from 'lucide-react'
import React from 'react'

const Socials = () => {
    return (
        <section id='contact' className='pt-10 mx-5'>
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