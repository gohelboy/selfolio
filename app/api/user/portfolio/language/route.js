import languageModal from "@/model/language";
import portfolioModal from "@/model/portfolio";
import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successReponse } from "@/utils/responseHandler"

await dbConnection();

export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioId = req.nextUrl.searchParams.get('p');
        const languageData = await req.json();
        if (!userId || !portfolioId) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ _id: portfolioId, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');

        for (const language of languageData) {
            if (language?._id) {
                const { _id, ...updatedExperience } = language;
                await languageModal.findOneAndUpdate(
                    { "portfolio": portfolioId, "languages._id": _id },
                    { $set: { "languages.$": updatedExperience } },
                    { new: true }
                );
            } else {
                const newExpirence = { language: language.language, proficiency: language.proficiency };
                await languageModal.findOneAndUpdate(
                    { "portfolio": portfolioId },
                    { $push: { "languages": newExpirence } },
                    { new: true, upsert: true }
                );
            }
        }
        return successReponse('Language updated successfully')
    } catch (error) {
        return InternalServerError(error)
    }
}