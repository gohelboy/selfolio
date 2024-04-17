import { InternalServerError, successResponse } from "@/utils/responseHandler";
import { cookies } from "next/headers";

export const GET = async (req, res) => {
    try {
        cookies().delete('token');
        return successResponse('logged out')

    } catch (error) {
        return InternalServerError(error)
    }
} 