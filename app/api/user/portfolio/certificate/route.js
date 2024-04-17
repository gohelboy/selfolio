
import certificateModal from "@/model/certificate";
import portfolioModal from "@/model/portfolio";
import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successResponse } from "@/utils/responseHandler";
await dbConnection();
export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const poerfolioName = req.nextUrl.searchParams.get('p');
        const certificateData = await req.json();
        if (!userId || !poerfolioName) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ name: poerfolioName, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');

        for (const certificate of certificateData) {
            if (certificate?._id) {
                const { _id, ...updatedCertificate } = certificate;
                await certificateModal.findOneAndUpdate(
                    { "portfolio": portfolio._id, "certifications._id": _id },
                    { $set: { "certifications.$": updatedCertificate } },
                    { new: true }
                );
            } else {
                const newCertificate = { certificationName: certificate.certificationName, issuingOrganization: certificate.issuingOrganization, certificationDate: certificate.certificationDate };
                await certificateModal.findOneAndUpdate(
                    { "portfolio": portfolio._id },
                    { $push: { "certifications": newCertificate } },
                    { new: true, upsert: true }
                );
            }
        }
        return successResponse('Education added successfully');
    } catch (error) {
        return InternalServerError(error)
    }
}