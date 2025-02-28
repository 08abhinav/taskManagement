import 'dotenv/config'
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.PASSWORD_USER
    }
})


export async function sendEmail(to, subject, text){
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to, 
        subject,
        text
    }
    try {
        await transport.sendMail(mailOptions);
            console.log(`Email sent to ${to}`)
    } catch (error) {
        console.log(error.message)   
    }
}
