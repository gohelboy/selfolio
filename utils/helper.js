import nodeMail from "./mailConnection"

export const sendMail = async (to, title, html) => {
    await nodeMail.sendMail({
        from: process.env.MAIL_USER,
        to: to,
        subject: title,
        html: html,
    })
}