import portfolioModel from "@/model/portfolio";
import skillModel from "@/model/skills";
import userModel from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successResponse } from "@/utils/responseHandler";

await dbConnection();

export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioName = req.nextUrl.searchParams.get('p');
        const skillsData = await req.json();

        if (!userId || !portfolioName) return failedResponse('Invalid request');

        const user = await userModel.findById(userId);
        if (!user) return failedResponse('User not found');

        const portfolio = await portfolioModel.findOne({ name: portfolioName });
        if (!portfolio) return failedResponse('Portfolio not found');

        for (const skillTypeData of skillsData) {
            const { skillType, names, _id } = skillTypeData;

            if (!Array.isArray(names) || !names.every(name => typeof name === 'string')) {
                console.log('error in names');
                console.error('Invalid names array for skill type:', skillType);
                continue;
            }

            let existingSkillType = await skillModel.findOne({
                portfolio: portfolio._id,
                "skills._id": _id
            });

            if (existingSkillType) {
                await skillModel.findOneAndUpdate(
                    { portfolio: portfolio._id, "skills._id": _id },
                    { $set: { "skills.$": { skillType, names } } },
                    { new: true }
                );
            } else {
                await skillModel.findOneAndUpdate(
                    { portfolio: portfolio._id },
                    { $push: { "skills": { skillType, names } } },
                    { new: true, upsert: true }
                );
            }
        }

        return successResponse('Skills inserted/updated successfully');
    } catch (error) {
        return InternalServerError(error);
    }
};
