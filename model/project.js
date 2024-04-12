import { Schema, models, model } from 'mongoose';

const projectSchema = new Schema({
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    projects: [
        {
            projectName: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            technologiesUsed: [
                {
                    type: String
                }
            ],
            projectLink: {
                type: String
            },
            projectImage: {
                type: String
            },
        }
    ],
}, { timestamps: true })

const projectModal = models.Project || model('Project', projectSchema);
export default projectModal;