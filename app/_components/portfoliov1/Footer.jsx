import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-10 w-full bg-slate-700'>
            <div className='flex items-center justify-center p-2'>
                <p className='text-white'>Copyright &copy;{new Date().getFullYear()} Powered by <u>selfolio</u></p>
            </div>
        </footer>
    )
}

export default Footer