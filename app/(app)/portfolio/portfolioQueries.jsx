import { useMutation, useQuery } from "@tanstack/react-query"
import { deletePortfolio, getPorfolios, getPostfolioDetails, postCreatePorfolio, postEducation, postExperience, postMe, postProjectImage, postProjects, postSkills } from "./portfolioAPI"
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

export const usePostExpirence = (portfolioId) => {
    return useMutation({
        mutationKey: [queryKey?.postExperience],
        mutationFn: (data) => postExperience(data),
        onSuccess: () => {
            queryClient.invalidateQueries([queryKey.getPortfolioDetails + portfolioId]);
        }
    })
}

export const usePostSkills = (portfolioId) => {
    return useMutation({
        mutationKey: [queryKey?.postSkills],
        mutationFn: (data) => postSkills(data),
        onSuccess: () => {
            queryClient.invalidateQueries([queryKey.getPortfolioDetails + portfolioId]);
        }
    })
}

export const usePostProjects = (portfolioId) => {
    return useMutation({
        mutationKey: [queryKey?.postProjects],
        mutationFn: (data) => postProjects(data),
        onSuccess: () => {
            queryClient.invalidateQueries([queryKey.getPortfolioDetails + portfolioId]);
        }
    })
}

export const usePostProjectImage = (config) => {
    return useMutation({
        mutationKey: [queryKey?.postProjectImage],
        mutationFn: (data) => postProjectImage(data),
        ...config
    })
}