import { Schema, models, model } from 'mongoose';

const skillsSchema = new Schema({
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    skills: [
        {
            skillType: {
                type: String,
            },
            names: [
                {
                    type: String,
                    required: false,
                }
            ]
        }
    ]
}, { timestamps: true });

const skillModel = models.Skill || model('Skill', skillsSchema);

export default skillModel;