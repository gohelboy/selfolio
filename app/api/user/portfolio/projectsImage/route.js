import portfolioModal from "@/model/portfolio";
import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successResponseWithData } from "@/utils/responseHandler"
import { uploadImage } from "@/utils/upload-images";
await dbConnection();
export const POST = async (req) => {
    try {
        const formData = await req.formData()
        const projectImage = await formData.get('projectImage');
        const portfolioName = await formData.get('portfolioId');
        const projectIndex = await formData.get('projectIndex');
        const userId = await formData.get('userId');
        if (!userId || !portfolioName || !projectImage || !projectIndex) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ name: portfolioName, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');
        const uploadedImage = await uploadImage(projectImage, "projectImage");
        const imageUrl = uploadedImage.secure_url || uploadedImage.url
        const data = {
            imageUrl,
            projectIndex
        }
        return successResponseWithData(data, 'Image uploaded successfully')
    } catch (error) {
        return InternalServerError(error)
    }
}