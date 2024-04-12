import nodeMailer from "nodemailer"


const nodeMail = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

export default nodeMail;