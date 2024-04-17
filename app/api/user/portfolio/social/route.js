import portfolioModal from "@/model/portfolio";
import socialModal from "@/model/social";
import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successResponse } from "@/utils/responseHandler";
await dbConnection();
export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioName = req.nextUrl.searchParams.get('p');
        const { github, linkedIn, twitter, other } = await req.json();
        const socialLinkData = { github, linkedIn, twitter, other }
        if (!userId || !portfolioName) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ name: portfolioName, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');
        await socialModal.findOneAndUpdate(
            { portfolio: portfolio._id },
            { $set: { socialMediaLinks: socialLinkData } },
            { new: true, upsert: true });
        return successResponse('Skills added successfully');
    } catch (error) {
        return InternalServerError(error)
    }
}