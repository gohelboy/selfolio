import portfolioModal from '@/model/portfolio'
import userModal from '@/model/user'
import { dbConnection } from '@/utils/Connections';
import { failedResponse, InternalServerError, successResponse, successResponseWithData } from '@/utils/responseHandler';

await dbConnection()

export const POST = async (req) => {
    try {
        const userId = await req.nextUrl.searchParams.get('u')
        if (!userId) return failedResponse('invalid request')
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('user not found');
        const randomName = Date.now().toString().slice(-6);
        const newPortfolio = await new portfolioModal({
            user: userId,
            name: randomName,
        }).save();
        return successResponseWithData(newPortfolio, 'Portfolio created successfully')
    } catch (error) {
        return InternalServerError(error)
    }
}

export const GET = async (req) => {
    try {
        const userId = await req.nextUrl.searchParams.get('u');
        if (!userId) return failedResponse('invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('user not found');

        const portfolios = await portfolioModal.find({ user: userId });
        return successResponseWithData(portfolios, 'Portfolios fetched successfully');

    } catch (error) {
        return InternalServerError(error);
    }
}

export const DELETE = async (req) => {
    try {
        const userId = await req.nextUrl.searchParams.get('u');
        const portfolioId = await req.nextUrl.searchParams.get('p');
        if (!userId || !portfolioId) return failedResponse('invalid request');
        const user = await userModal.findById(userId);
        if (!user) return failedResponse('user not found');
        await portfolioModal.findOneAndDelete({ user: userId, _id: portfolioId });
        return successResponse('Portfolios deleted successfully');
    } catch (error) {
        return InternalServerError(error);
    }
}