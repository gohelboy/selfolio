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

export const getPostfolioDetails = async (name) => {
    return handelRequest(instance.get, `user/portfolio/${name}`);
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

export const postCertificates = async (data) => {
    return handelRequest(instance.post, `user/portfolio/certificate?u=${data?.userId}&p=${data?.portfolioId}`, data?.payload);
}

export const postLanguages = async (data) => {
    return handelRequest(instance.post, `user/portfolio/language?u=${data?.userId}&p=${data?.portfolioId}`, data?.payload);
}

export const postHobbies = async (data) => {
    return handelRequest(instance.post, `user/portfolio/hobby?u=${data?.userId}&p=${data?.portfolioId}`, data?.payload);
}

export const postRefrences = async (data) => {
    return handelRequest(instance.post, `user/portfolio/refrence?u=${data?.userId}&p=${data?.portfolioId}`, data?.payload);
}

export const postSocialLinks = async (data) => {
    return handelRequest(instance.post, `user/portfolio/social?u=${data?.userId}&p=${data?.portfolioId}`, data?.payload);
}