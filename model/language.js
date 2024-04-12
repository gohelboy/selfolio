import { Schema, models, model } from 'mongoose';

const languageSchema = new Schema({
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    languages: [
        {
            language: {
                type: String,
                required: true
            },
            proficiency: {
                type: String
            }
        }
    ],
}, { timestamps: true })

const languageModal = models.Language || model('Language', languageSchema);
export default languageModal;