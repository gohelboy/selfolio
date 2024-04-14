import { Schema, models, model } from 'mongoose';

const skillsSchema = new Schema({
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    skills: [
        {
            name: {
                type: String,
                required: true
            },
        }
    ],
}, { timestamps: true })

const skillModal = models.Skill || model('Skill', skillsSchema);
export default skillModal;