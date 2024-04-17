import { Schema, models, model } from 'mongoose';

const refrnecSchema = new Schema({
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    references: [
        {
            name: {
                type: String,
                required: true
            },
            role: {
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
            }
        }
    ],
}, { timestamps: true })

const refrenceModal = models.Refrence || model('Refrence', refrnecSchema);
export default refrenceModal;