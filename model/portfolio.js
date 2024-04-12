
import { Schema, models, model } from 'mongoose';

const portfolioSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
}, { timestamps: true });

const portfolioModal = models?.Portfolios || model('Portfolios', portfolioSchema);
export default portfolioModal;

