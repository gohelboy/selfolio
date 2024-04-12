import { Schema, models, model } from 'mongoose';

const socialSchema = new Schema({
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    socialMediaLinks: {
        linkedIn: {
            type: String
        },
        github: {
            type: String
        },
        twitter: {
            type: String
        },
        other: {
            type: String
        }
    },
}, { timestamps: true })

const socialModal = models.Social || model('Social', socialSchema);
export default socialModal;