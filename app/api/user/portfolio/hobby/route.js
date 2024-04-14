import hobbyModal from "@/model/hobby";
import portfolioModal from "@/model/portfolio";
import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successReponse } from "@/utils/responseHandler"

await dbConnection();

export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioId = req.nextUrl.searchParams.get('p');
        const hobbyData = await req.json();
        if (!userId || !portfolioId) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ _id: portfolioId, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');

        for (const hobby of hobbyData) {
            if (hobby?._id) {
                const { _id, ...updatedExperience } = hobby;
                await hobbyModal.findOneAndUpdate(
                    { "portfolio": portfolioId, "interestsHobbies._id": _id },
                    { $set: { "interestsHobbies.$": updatedExperience } },
                    { new: true }
                );
            } else {
                const newExpirence = { interestHobby: hobby.interestHobby };
                await hobbyModal.findOneAndUpdate(
                    { "portfolio": portfolioId },
                    { $push: { "interestsHobbies": newExpirence } },
                    { new: true, upsert: true }
                );
            }
        }
        return successReponse('Language updated successfully')
    } catch (error) {
        return InternalServerError(error)
    }
}