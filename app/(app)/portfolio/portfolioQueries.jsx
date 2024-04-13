import { useMutation, useQuery } from "@tanstack/react-query"
import { deletePortfolio, getPorfolios, getPostfolioDetails, postCreatePorfolio, postEducation, postMe } from "./portfolioAPI"
import { queryKey } from "@/utils/CONSTANTS"
import { queryClient } from "@/app/_components/QueryProviderWrapper"

export const useCreatePortfolio = (config) => {
    return useMutation({
        mutationKey: [queryKey.createPortfolio],
        mutationFn: (data) => postCreatePorfolio(data),
        ...config
    })
}

export const useGetPortfolios = (id) => {
    return useQuery({
        queryKey: [queryKey.getPortfolios],
        queryFn: () => getPorfolios(id),
        enabled: !!id,
        select: data => data?.data
    })
}
export const useDeletePortfolio = () => {
    return useMutation({
        mutationKey: [queryKey.deletePortfolios],
        mutationFn: (data) => deletePortfolio(data),
        onSuccess: () => {
            queryClient.invalidateQueries([queryKey.getPortfolios]);
        }
    })
}
export const useGetPortfolioDetails = (id) => {
    return useQuery({
        queryKey: [queryKey.getPortfolioDetails + id],
        queryFn: () => getPostfolioDetails(id),
        select: data => data?.data,
        id: !!id
    })
}

export const usePostMe = (portfolioId) => {
    return useMutation({
        mutationKey: [queryKey.postMe],
        mutationFn: (data) => postMe(data),
        onSuccess: (res) => {
            queryClient.invalidateQueries([queryKey.getPortfolioDetails + portfolioId]);
        }
    })
}
export const usePostEducation = (portfolioId) => {
    return useMutation({
        mutationKey: [queryKey?.postEducation],
        mutationFn: (data) => postEducation(data),
        onSuccess: () => {
            queryClient.invalidateQueries([queryKey.getPortfolioDetails + portfolioId]);
        }
    })
}