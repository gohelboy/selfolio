'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useActivateUser } from '../authQueries'
import { useRouter } from 'next/navigation'
import { routes } from '@/utils/routes'

const Activate = () => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const token = searchParams.get('token')
    const { mutate, isSuccess, data } = useActivateUser();

    if (isSuccess) {
        if (data?.status) {
            localStorage.setItem('user', JSON.stringify(data?.data));
            router.push(routes.home);
        } else {
            router.push(routes.login);
        }
    }

    useEffect(() => {
        if (token) { mutate({ token: token }) }
    }, [])
    return (
        <section className='h-screen w-full p-4 flex items-center justify-center'>
            <div className='flex gap-2'>
                We are activating your account please wait...
            </div>
        </section>
    )
}

export default Activate 