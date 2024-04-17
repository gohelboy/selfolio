import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { registerTemplate } from "@/utils/emailTemplates";
import { sendMail } from "@/utils/helper";
import { failedResponse, InternalServerError, successResponseWithData } from "@/utils/responseHandler";
import bcrypt from "bcrypt";
import JWT from 'jsonwebtoken';
import { cookies } from "next/headers";

await dbConnection();

export const POST = async (request) => {
    try {
        const { email, password } = await request.json();
        if (!email || !password) return failedResponse('Please provide email and password');

        const user = await userModal.findOne({ email });
        if (!user) return failedResponse('User not found');

        if (!user.verified) {
            const token = JWT.sign({ email: user?.email, id: user?.id, verified: user?.verified }, process.env.JWT_SECRET, { expiresIn: '1h' });
            const emailPayload = {
                email,
                link: `http://localhost:3000/u/activate?token=${token}`,
                expiry: "1 Hour"
            }
            await sendMail(email, 'Verify your account', registerTemplate(emailPayload));
            return failedResponse('Please verify your account');
        }

        const token = JWT.sign({ email: user?.email, id: user?.id, verified: user?.verified }, process.env.JWT_SECRET);
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return failedResponse('Incorrect password');

        cookies().set('token', token, { httpOnly: true, secure: true });
        return successResponseWithData({ email: user?.email, id: user?.id }, 'Logged in successfully');
    } catch (error) {
        return InternalServerError(error)
    }
}