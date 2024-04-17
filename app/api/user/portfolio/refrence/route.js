import portfolioModal from "@/model/portfolio";
import refrenceModal from "@/model/refrence";
import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successResponse } from "@/utils/responseHandler"

await dbConnection();

export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioName = req.nextUrl.searchParams.get('p');
        const refrenceData = await req.json();
        if (!userId || !portfolioName) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ name: portfolioName, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');

        for (const refrence of refrenceData) {
            if (refrence?._id) {
                const { _id, ...updatedRefrence } = refrence;
                await refrenceModal.findOneAndUpdate(
                    { "portfolio": portfolio._id, "references._id": _id },
                    { $set: { "references.$": updatedRefrence } },
                    { new: true }
                );
            } else {
                const newExpirence = { name: refrence.name, role: refrence.role, email: refrence.email, phoneNumber: refrence.phoneNumber };
                await refrenceModal.findOneAndUpdate(
                    { "portfolio": portfolio._id },
                    { $push: { "references": newExpirence } },
                    { new: true, upsert: true }
                );
            }
        }
        return successResponse('Language updated successfully')
    } catch (error) {
        return InternalServerError(error)
    }
}