import userModal from "@/model/user";
import { dbConnection } from "@/utils/Connections";
import { failedResponse, InternalServerError, successResponseWithData } from "@/utils/responseHandler";
import JWT from "jsonwebtoken";
import { cookies } from "next/headers";

await dbConnection();

export const POST = async (req) => {

    try {
        const { token } = await req.json();
        if (!token) return failedResponse("Please provide token");


        const decoded = JWT.verify(token, process.env.JWT_SECRET)
        if (!decoded) return failedResponse("Invalid Token")

        const { id, email } = decoded
        const user = await userModal.findOne({ _id: id, email });
        if (!user) return failedResponse("User not found");
        if (user && user?.verified) return failedResponse("Account already verified");

        user.verified = true;
        await user.save();

        const newToken = JWT.sign({ id: user?.id, email, verified: user?.verified }, process.env.JWT_SECRET);

        cookies().set("token", newToken, { httpOnly: true, secure: true });
        return successResponseWithData({ id: user?.id, email }, "Account verified successfully");


    } catch (error) {
        return InternalServerError(error)
    }

}