import hobbyModal from "@/model/hobby";
import portfolioModal from "@/model/portfolio";
import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successResponse } from "@/utils/responseHandler"

await dbConnection();

export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioName = req.nextUrl.searchParams.get('p');
        const hobbyData = await req.json();
        if (!userId || !portfolioName) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ name: portfolioName, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');

        for (const hobby of hobbyData) {
            if (hobby?._id) {
                const { _id, ...updatedExperience } = hobby;
                await hobbyModal.findOneAndUpdate(
                    { "portfolio": portfolio._id, "interestsHobbies._id": _id },
                    { $set: { "interestsHobbies.$": updatedExperience } },
                    { new: true }
                );
            } else {
                const newExpirence = { interestHobby: hobby.interestHobby };
                await hobbyModal.findOneAndUpdate(
                    { "portfolio": portfolio._id },
                    { $push: { "interestsHobbies": newExpirence } },
                    { new: true, upsert: true }
                );
            }
        }
        return successResponse('Language updated successfully')
    } catch (error) {
        return InternalServerError(error)
    }
}