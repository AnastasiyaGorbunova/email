const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
function main() {
    //регистрация
    const transporter = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        // port: 25,
        // secure: false, // true for port 465, false for other ports //https или не https
        service: "gmail", //заготовка от nodemailer
        auth: {
            user: "gad25072015@gmail.com",
            pass: "qvey umov iuxd mnst",
        },
    });
    //отправка
    return async (mail) => {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Горбунова АД😈 (4-МЗ-5)" <gad25072015@gmail.com>', // sender address
            to: mail, // list of receivers
            subject: "Бронирование билета", // Subject line
            text: "Вы успешно забронировали билет.", // plain text body
            html: "<b>Вы успешно забронировали билет. Приятного просмотра🌟</b>", // html body
        });
    };
}
module.exports = main; //export main
// main().catch(console.error);
