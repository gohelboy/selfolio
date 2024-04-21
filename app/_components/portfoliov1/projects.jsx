import { ArrowUpLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = ({ data }) => {
    return (
        <section id='projects' className='pt-10 px-5 w-full md:max-w-[1140px] 2xl:max-w-[1440px]'>
            <div className='flex flex-col gap-5 w-full'>
                <h2 className='font-semibold text-xl'>Projects</h2>
                <div className='flex flex-col gap-4 md:grid md:grid-cols-2 2xl:grid-cols-3'>
                    {data?.map((project, i) => <div key={i} className='flex flex-col gap-2 md:gap-4 p-3 md:p-4 bg-neutral-200 rounded-2xl'>
                        <Image src={project?.projectImage || "/ppholder.webp"} width={400} height={200} alt="logo" className='object-cover rounded-lg md:w-full' />
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between'>
                                <div className='font-semibold text-lg'>{project?.projectName}</div>
                                <Link href={project?.projectLink} className='bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-500 transition-all flex items-center'><ArrowUpLeft />Visit</Link>
                            </div>
                            <p className='text-sm text-gray-500'>{project?.description}</p>
                            <div className='flex flex-wrap gap-1'>
                                {project?.technologiesUsed?.map((tech, i) => <span key={i} className='bg-slate-400 text-white p-1 rounded-lg'>{tech}</span>)}
                            </div>
                        </div>
                    </div>)}

                </div>
            </div>
        </section>
    )
}

export default Projects