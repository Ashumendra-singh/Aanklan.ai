import nodemailer from "nodemailer";

const sendEmail = async (email, link) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: "Aanklan.ai <ashut3103@gmail.com>",
            to: email,
            subject: "Aanklan.ai - Forgot Password",
            html: `Click on the link for Reset Password <a href="${link}">${link}</a>`,
        });
    } catch (error) {
        throw new AppError(500, error);
    }
};

export default sendEmail;
