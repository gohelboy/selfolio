import educationModal from "@/model/education";
import portfolioModal from "@/model/portfolio";
import userModal from "@/model/user";
import { failedResponse, InternalServerError, successReponse } from "@/utils/responseHandler";

export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioId = req.nextUrl.searchParams.get('p');
        const educationData = await req.json();
        if (!userId || !portfolioId) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ _id: portfolioId, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');

        for (const education of educationData) {
            if (education?._id) {
                const { _id, ...updatedEducation } = education;
                await educationModal.findOneAndUpdate(
                    { "portfolio": portfolioId, "education._id": _id },
                    { $set: { "education.$": updatedEducation } },
                    { new: true }
                );
            } else {
                const newEducation = { degree: education.degree, institution: education.institution, graduationYear: education.graduationYear };
                await educationModal.findOneAndUpdate(
                    { "portfolio": portfolioId },
                    { $push: { "education": newEducation } },
                    { new: true, upsert: true }
                );
            }
        }
        return successReponse('Education added successfully');
    } catch (error) {
        return InternalServerError(error)
    }
}