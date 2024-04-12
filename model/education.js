import { Schema, models, model } from 'mongoose';

const educationSchema = new Schema({
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    education: [
        {
            degree: {
                type: String,
                required: true
            },
            institution: {
                type: String,
                required: true
            },
            graduationYear: {
                type: Number,
                required: true
            }
        }
    ],
}, { timestamps: true })

const educationModal = models.Education || model('Education', educationSchema);
export default educationModal;