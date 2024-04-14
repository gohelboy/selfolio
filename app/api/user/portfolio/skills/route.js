import portfolioModal from "@/model/portfolio";
import skillModal from "@/model/skills";
import userModal from "@/model/user";
import { failedResponse, InternalServerError, successReponse } from "@/utils/responseHandler";

export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioId = req.nextUrl.searchParams.get('p');
        const skillsData = await req.json();
        if (!userId || !portfolioId) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ _id: portfolioId, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');

        for (const skill of skillsData) {
            if (skill?._id) {
                const { _id, ...updatedSKills } = skill;
                await skillModal.findOneAndUpdate(
                    { "portfolio": portfolioId, "skills._id": _id },
                    { $set: { "skills.$": updatedSKills } },
                    { new: true }
                );
            } else {
                const newSkill = { name: skill.name };
                await skillModal.findOneAndUpdate(
                    { "portfolio": portfolioId },
                    { $push: { "skills": newSkill } },
                    { new: true, upsert: true }
                );
            }
        }
        return successReponse('Skills added successfully');
    } catch (error) {
        return InternalServerError(error)
    }
}