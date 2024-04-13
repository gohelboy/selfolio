
import meModal from "@/model/aboutMe";
import portfolioModal from "@/model/portfolio";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successReponse } from "@/utils/responseHandler";

await dbConnection();

export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioId = req.nextUrl.searchParams.get('p');
        const { fullName, email, ...rest } = await req.json();
        if (!fullName || !email || !userId, !portfolioId) return failedResponse('Please provide required fields');

        const portfolio = portfolioModal.exists({ _id: portfolioId, user: userId });
        if (!portfolio) failedResponse('You are not authorized to perform this action');

        const newData = {
            user: userId,
            fullName,
            email,
            ...rest,
        }
        await meModal.findOneAndUpdate({ portfolio: portfolioId }, newData, { new: true, upsert: true });
        return successReponse('About me updated successfully');
    } catch (error) {
        return InternalServerError(error);
    }
}


export const GET = async () => {
    return successReponse('About me fetched');
}