import { handelRequest, instance } from "@/utils/API";

export const postCreatePorfolio = async (id) => {
    return handelRequest(instance.post, `user/portfolio?u=${id}`);
}
export const getPorfolios = async (id) => {
    return handelRequest(instance.get, `user/portfolio?u=${id}`);
}

export const deletePortfolio = async (data) => {
    return handelRequest(instance.delete, `user/portfolio?u=${data?.userId}&p=${data?.portfolioId}`);
}

export const getPostfolioDetails = async (id) => {
    return handelRequest(instance.get, `user/portfolio/${id}`);
}

export const postMe = async (data) => {
    return handelRequest(instance.post, `user/portfolio/me?u=${data?.userId}&p=${data?.portfolioId}`, data?.payload);
}

export const postEducation = async (data) => {
    return handelRequest(instance.post, `user/portfolio/education?u=${data?.userId}&p=${data?.portfolioId}`, data?.payload);
}

export const postExperience = async (data) => {
    return handelRequest(instance.post, `user/portfolio/experience?u=${data?.userId}&p=${data?.portfolioId}`, data?.payload);
}

export const postSkills = async (data) => {
    return handelRequest(instance.post, `user/portfolio/skills?u=${data?.userId}&p=${data?.portfolioId}`, data?.payload);
}

export const postProjects = async (data) => {
    return handelRequest(instance.post, `user/portfolio/projects?u=${data?.userId}&p=${data?.portfolioId}`, data?.payload);
}
export const postProjectImage = async (data) => {
    return handelRequest(instance.post, `user/portfolio/projectsImage`, data);
}