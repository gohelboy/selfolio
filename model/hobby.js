import { Schema, models, model } from 'mongoose';

const hobbySchema = new Schema({
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    interestsHobbies: [
        {
            interestHobby: {
                type: String,
                required: true
            }
        }
    ],
}, { timestamps: true })

const hobbyModal = models.Hobby || model('Hobby', hobbySchema);
export default hobbyModal;