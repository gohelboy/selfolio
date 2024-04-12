import { Schema, models, model } from 'mongoose';

const MeSchema = new Schema({
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    tagline: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true
    },
}, { timestamps: true })

const meModal = models.Me || model('Me', MeSchema);
export default meModal;