import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col items-center w-full py-3 md:py-4 2xl:py-7 bg-gradient-to-t from-[#0f0f0f] to-[#454545] text-white'>
            <div className='px-5 md:p-0 w-full md:max-w-[1140px] 2xl:max-w-[1440px]'>
                <p className='text-sm 2xl:text-lg'>Powered by <u>selfolio</u></p>
            </div>
        </footer >
    )
}

export default Footer