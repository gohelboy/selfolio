import portfolioModal from "@/model/portfolio";
import socialModal from "@/model/social";
import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successReponse } from "@/utils/responseHandler";
await dbConnection();
export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioId = req.nextUrl.searchParams.get('p');
        const { github, linkedIn, twitter, other } = await req.json();
        const socialLinkData = { github, linkedIn, twitter, other }
        if (!userId || !portfolioId) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ _id: portfolioId, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');
        await socialModal.findOneAndUpdate({ portfolio: portfolioId }, { $set: { socialMediaLinks: socialLinkData } }, { new: true, upsert: true });
        return successReponse('Skills added successfully');
    } catch (error) {
        return InternalServerError(error)
    }
}