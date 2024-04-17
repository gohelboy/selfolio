import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { forgetPasswordLinkTemplate } from "@/utils/emailTemplates";
import { sendMail } from "@/utils/helper";
import { failedResponse, InternalServerError, successResponse } from "@/utils/responseHandler";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

await dbConnection();

export const POST = async (request) => {
    try {
        const { email } = await request.json();
        if (!email) return failedResponse("Please provide email");

        const user = await userModal.findOne({ email });
        if (!user) return failedResponse("user not found");
        const token = JWT.sign({ email: user?.email, id: user?.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const payload = {
            link: `http://localhost:3000/u/forget-password?token=${token}`,
            expiry: "1 hour"
        }
        await sendMail(email, 'Forget Password', forgetPasswordLinkTemplate(payload));

        return successResponse(`we have sent password reset link to ${email}`);
    } catch (error) {
        return InternalServerError(error)
    }

}

export const PATCH = async (request) => {
    const { newPassword, confirmPassword, token } = await request.json();

    if (!token) return failedResponse("invalid request");
    if (!newPassword || !confirmPassword) return failedResponse("Please provide new password and confirm password");
    if (newPassword !== confirmPassword) return failedResponse("Passwords does not match");
    const newHashedPassword = await bcrypt.hash(newPassword, 10);

    const payload = JWT.verify(token, process.env.JWT_SECRET);
    if (!payload) return failedResponse("invalid token");
    await userModal.findOneAndUpdate({ _id: payload?.id, email: payload?.email }, { password: newHashedPassword });

    return successResponse("Password reset successfully");
}