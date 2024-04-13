import meModal from "@/model/aboutMe";
import certificateModal from "@/model/certificate";
import educationModal from "@/model/education";
import experinceModal from "@/model/experience";
import hobbyModal from "@/model/hobby";
import languageModal from "@/model/language";
import portfolioModal from "@/model/portfolio";
import projectModal from "@/model/project";
import refrenceModal from "@/model/refrence";
import skillModal from "@/model/skills";
import socialModal from "@/model/social";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successReponseWithData } from "@/utils/responseHandler";


await dbConnection()

export const GET = async (req, { params }) => {
    try {

        const { id } = params;
        if (!id) return failedResponse("invalid request");
        const portfolio = await portfolioModal.findById(id);
        if (!portfolio) return failedResponse("Portfolio not found");

        const [meData, educationData, experienceData, skillData, projectData, certificateData, languageData, hobbyData, refrenceData, socialData] = await Promise.all([
            meModal.findOne({ portfolio: portfolio?._id }),
            educationModal.findOne({ portfolio: portfolio?._id }),
            experinceModal.findOne({ portfolio: portfolio?._id }),
            skillModal.findOne({ portfolio: portfolio?._id }),
            projectModal.findOne({ portfolio: portfolio?._id }),
            certificateModal.findOne({ portfolio: portfolio?._id }),
            languageModal.findOne({ portfolio: portfolio?._id }),
            hobbyModal.findOne({ portfolio: portfolio?._id }),
            refrenceModal.findOne({ portfolio: portfolio?._id }),
            socialModal.findOne({ portfolio: portfolio?._id }),
        ]);

        const portfolioData = {
            meData,
            educationData,
            experienceData,
            skillData,
            projectData,
            certificateData,
            languageData,
            hobbyData,
            refrenceData,
            socialData,
        };

        return successReponseWithData(portfolioData, "Portfolio fetched successfully");
    } catch (error) {
        return InternalServerError(error)
    }

}