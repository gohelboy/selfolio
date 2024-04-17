import { ArrowDownToLine } from 'lucide-react'
import React from 'react'

const Certificates = ({ data }) => {
    return (
        <section className='pt-10 px-5  w-full md:max-w-[1140px] 2xl:max-w-[1440px]'>
            <div className='flex flex-col gap-5 w-full '>
                <h2 className='font-semibold text-xl'>Cerificates</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {data?.map((certificate, i) => <div key={i} className='flex flex-col gap-2 p-3 bg-neutral-200 rounded-2xl'>
                        <div className='flex flex-col'>
                            <div className='font-semibold'>{certificate?.certificationName}</div>
                            <span>{certificate?.issuingOrganization}</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>{certificate?.certificationDate && new Date(certificate?.certificationDate).getFullYear()}</span>
                            <button className='bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-500 transition-all'>
                                <ArrowDownToLine />
                            </button>
                        </div>
                    </div>)}

                </div>
            </div>
        </section>
    )
}

export default Certificates