import experinceModal from "@/model/experience";
import portfolioModal from "@/model/portfolio";
import userModal from "@/model/user";
import { failedResponse, InternalServerError, successReponse } from "@/utils/responseHandler"

export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioId = req.nextUrl.searchParams.get('p');
        const experienceData = await req.json();
        if (!userId || !portfolioId) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ _id: portfolioId, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');

        for (const experience of experienceData) {
            if (experience?._id) {
                const { _id, ...updatedExperience } = experience;
                await experinceModal.findOneAndUpdate(
                    { "portfolio": portfolioId, "workExperience._id": _id },
                    { $set: { "workExperience.$": updatedExperience } },
                    { new: true }
                );
            } else {
                const newExpirence = { jobTitle: experience.jobTitle, companyName: experience.companyName, employmentDates: experience.employmentDates };
                await experinceModal.findOneAndUpdate(
                    { "portfolio": portfolioId },
                    { $push: { "workExperience": newExpirence } },
                    { new: true, upsert: true }
                );
            }
        }
        return successReponse('experience updated successfully')
    } catch (error) {
        return InternalServerError(error)
    }
}