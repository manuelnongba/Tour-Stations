const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 25,
    auth: {
      user: '47a463020ec598',
      pass: 'd240a2f329ce49',
    },
    //Activate in gmail "less secure app" option
  });

  //2) Define the email options
  const mailOptions = {
    from: 'Emmanuel Anongba <eanongba@hello.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //3) Actually send the email
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
