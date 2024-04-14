
import certificateModal from "@/model/certificate";
import portfolioModal from "@/model/portfolio";
import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successReponse } from "@/utils/responseHandler";
await dbConnection();
export const POST = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get('u');
        const portfolioId = req.nextUrl.searchParams.get('p');
        const certificateData = await req.json();
        if (!userId || !portfolioId) return failedResponse('Invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('User not found');
        const portfolio = await portfolioModal.exists({ _id: portfolioId, user: userId });
        if (!portfolio) return failedResponse('You are not authorized to perform this action');

        for (const certificate of certificateData) {
            if (certificate?._id) {
                const { _id, ...updatedCertificate } = certificate;
                await certificateModal.findOneAndUpdate(
                    { "portfolio": portfolioId, "certifications._id": _id },
                    { $set: { "certifications.$": updatedCertificate } },
                    { new: true }
                );
            } else {
                const newCertificate = { certificationName: certificate.certificationName, issuingOrganization: certificate.issuingOrganization, certificationDate: certificate.certificationDate };
                await certificateModal.findOneAndUpdate(
                    { "portfolio": portfolioId },
                    { $push: { "certifications": newCertificate } },
                    { new: true, upsert: true }
                );
            }
        }
        return successReponse('Education added successfully');
    } catch (error) {
        return InternalServerError(error)
    }
}