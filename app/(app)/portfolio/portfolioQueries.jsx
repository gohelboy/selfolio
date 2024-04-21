import { useMutation, useQuery } from "@tanstack/react-query"
import { deletePortfolio, getPorfolios, getPostfolioDetails, postCertificates, postCreatePorfolio, postEducation, postExperience, postHobbies, postLanguages, postMe, postProjectImage, postProjects, postRefrences, postSkills, postSocialLinks } from "./portfolioAPI"
import { queryKey } from "@/utils/CONSTANTS"
import { queryClient } from "@/app/_components/QueryProviderWrapper"
import { routes } from "@/utils/routes"

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
export const useGetPortfolioDetails = (name) => {
    return useQuery({
        queryKey: [queryKey.getPortfolioDetails + name],
        queryFn: () => getPostfolioDetails(name),
        select: data => {
            if (!data?.status) window.location.href = routes.login;
            return data?.data
        },
        id: !!name
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

export const usePostCertificates = (portfolioId) => {
    return useMutation({
        mutationKey: [queryKey?.postCertificates],
        mutationFn: (data) => postCertificates(data),
        onSuccess: () => {
            queryClient.invalidateQueries([queryKey.getPortfolioDetails + portfolioId]);
        }
    })
}

export const usePostLanguages = (portfolioId) => {
    return useMutation({
        mutationKey: [queryKey?.postLanguages],
        mutationFn: (data) => postLanguages(data),
        onSuccess: () => {
            queryClient.invalidateQueries([queryKey.getPortfolioDetails + portfolioId]);
        }
    })
}

export const usePostHobbies = (portfolioId) => {
    return useMutation({
        mutationKey: [queryKey?.postHobbies],
        mutationFn: (data) => postHobbies(data),
        onSuccess: () => {
            queryClient.invalidateQueries([queryKey.getPortfolioDetails + portfolioId]);
        }
    })
}

export const usePostRefrences = (portfolioId) => {
    return useMutation({
        mutationKey: [queryKey?.postRefrences],
        mutationFn: (data) => postRefrences(data),
        onSuccess: () => {
            queryClient.invalidateQueries([queryKey.getPortfolioDetails + portfolioId]);
        }
    })
}

export const usePostSocialLinks = (portfolioId) => {
    return useMutation({
        mutationKey: [queryKey?.postSocialLinks],
        mutationFn: (data) => postSocialLinks(data),
        onSuccess: () => {
            queryClient.invalidateQueries([queryKey.getPortfolioDetails + portfolioId]);
        }
    })
}