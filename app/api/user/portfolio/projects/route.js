import portfolioModal from "@/model/portfolio";
import projectModal from "@/model/project";
import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successReponse } from "@/utils/responseHandler"
await dbConnection();

export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioId = req.nextUrl.searchParams.get('p');
        const projectData = await req.json();
        if (!userId || !portfolioId) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ _id: portfolioId, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');

        for (const project of projectData) {
            if (project?._id) {
                const { _id, ...updatedProject } = project;
                await projectModal.findOneAndUpdate(
                    { "portfolio": portfolioId, "projects._id": _id },
                    { $set: { "projects.$": updatedProject } },
                    { new: true }
                );
            } else {
                const newProject = { projectName: project.projectName, description: project.description, technologiesUsed: project.technologiesUsed, projectLink: project.projectLink, projectImage: project.projectImage };
                await projectModal.findOneAndUpdate(
                    { "portfolio": portfolioId },
                    { $push: { "projects": newProject } },
                    { new: true, upsert: true }
                );
            }
        }
        return successReponse('project updated successfully')
    } catch (error) {
        return InternalServerError(error)
    }
}