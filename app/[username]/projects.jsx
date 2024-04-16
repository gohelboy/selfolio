import { ArrowUpLeft } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
    return (
        <section className='mt-10 mx-5 md:w-[1080px]'>
            <div className='flex flex-col gap-5 w-full'>
                <h2 className='font-semibold text-xl'>Projects</h2>
                <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
                    <div className='flex flex-col gap-2 md:gap-4 p-3 md:p-4 bg-neutral-200 rounded-2xl'>
                        <Image src={"/ppholder.webp"} width={400} height={200} alt="logo" className='object-cover rounded-lg md:w-full' />
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between'>
                                <div className='font-semibold text-lg'>Project Name</div>
                                <button className='bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-500 transition-all flex items-center'><ArrowUpLeft />Visit</button>
                            </div>
                            <p className='text-sm text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                            <div className='flex flex-wrap gap-1'>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>Tailwind</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 md:gap-4 p-3 md:p-4 bg-neutral-200 rounded-2xl'>
                        <Image src={"/ppholder.webp"} width={400} height={200} alt="logo" className='object-cover rounded-lg md:w-full' />
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between'>
                                <div className='font-semibold text-lg'>Project Name</div>
                                <button className='bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-500 transition-all flex items-center'><ArrowUpLeft />Visit</button>
                            </div>
                            <p className='text-sm text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                            <div className='flex flex-wrap gap-1'>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>Tailwind</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 md:gap-4 p-3 md:p-4 bg-neutral-200 rounded-2xl'>
                        <Image src={"/ppholder.webp"} width={400} height={200} alt="logo" className='object-cover rounded-lg md:w-full' />
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between'>
                                <div className='font-semibold text-lg'>Project Name</div>
                                <button className='bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-500 transition-all flex items-center'><ArrowUpLeft />Visit</button>
                            </div>
                            <p className='text-sm text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                            <div className='flex flex-wrap gap-1'>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>Tailwind</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects