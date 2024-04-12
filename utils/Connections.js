import mongoose from "mongoose";
import nodeMailer from "nodemailer"

const MONGO_URI = process.env.MONGO_URI;

export const dbConnection = async () => {
    if (mongoose.connection.readyState) return;

    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        new Error("Error connecting to MongoDB");
    }
}


export const nodeMail = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

export default nodeMail;