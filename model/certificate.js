import { Schema, models, model } from 'mongoose';

const certificateSchema = new Schema({
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    certifications: [
        {
            certificationName: {
                type: String,
                required: true
            },
            issuingOrganization: {
                type: String,
                required: true
            },
            certificationDate: {
                type: Date,
                required: true
            }
        }
    ],
}, { timestamps: true })

const certificateModal = models.Certificate || model('Certificate', certificateSchema);
export default certificateModal;