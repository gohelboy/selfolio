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