'use client'
import { routes } from '@/utils/routes'
import { useLogout } from '../(auth)/authQueries'
import { useRouter } from 'next/navigation'
import { useCreatePortfolio, useDeletePortfolio, useGetPortfolios } from '../portfolio/portfolioQueries'
import useGetLocalItem from '@/hooks/useGetLocalItem'
import Link from 'next/link'

const Home = () => {
    const router = useRouter();
    const localUser = useGetLocalItem('user');

    const { refetch: logout, data, isSuccess } = useLogout()

    if (isSuccess && data?.status) {
        localStorage.removeItem('user');
        router.push(routes.login);
    }

    const onPortfolioCreateConfig = {
        onSuccess: (res) => {
            if (res?.status) {
                router.push(routes.portfolio + "/" + res?.data?._id);
            }
        }
    }
    const { data: protfolios } = useGetPortfolios(localUser?.id);
    const { mutate: deletePortfolio } = useDeletePortfolio();
    const { mutate } = useCreatePortfolio(onPortfolioCreateConfig);

    const createPortfolio = () => {
        mutate(localUser?.id)
    }

    const removePortfolio = (portfolioId) => {
        const payload = {
            userId: localUser?.id,
            portfolioId
        }
        deletePortfolio(payload)
    }

    return (
        <main className='flex min-h-screen flex-col gap-4 items-center justify-center'>
            <h1 className='text-3xl font-bold'>Home</h1>
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' onClick={createPortfolio}>
                Create Portfolio
            </button>
            <div className='w-[700px] flex flex-col gap-4 items-center justify-center'>
                {protfolios?.map((portfolio, i) =>
                    <div key={i} className='w-full flex flex-col'>
                        <div className='flex items-center justify-between w-full bg-gray-500  hover:bg-gray-700 text-white font-bold  p-4 rounded-2xl'>
                            <div> {portfolio?.name} </div>
                            <div className='flex items-center justify-center gap-4'>
                                <Link href={routes.portfolio + "/" + portfolio?._id} className='cursor-pointer'>Edit</Link>
                                <button className='cursor-pointer' onClick={() => removePortfolio(portfolio?._id)}>Delete</button>
                            </div>
                        </div>
                    </div>)}
            </div>
            <button className='absolute bottom-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={logout}>Logout</button>
        </main>
    )
}

export default Home