import { Schema, models, model } from 'mongoose';

const experienceSchema = new Schema({
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    workExperience: [
        {
            jobTitle: {
                type: String,
                required: true
            },
            companyName: {
                type: String,
                required: true
            },
            employmentDates: {
                type: String,
                required: true
            },
            responsibilities: {
                type: String,
                required: true
            }
        }
    ],
}, { timestamps: true })

const experinceModal = models.Experience || model('Experience', experienceSchema);
export default experinceModal;