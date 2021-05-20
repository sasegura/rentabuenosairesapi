
import {SentMessageInfo} from 'nodemailer';
import Mail = require('nodemailer/lib/mailer');

const nodemailer = require("nodemailer");

export class MailerService {

  async sendMail(mailOptions: Mail.Options): Promise<SentMessageInfo> {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use TLS
      auth: {
        user: "ighilarion@gmail.com",
        pass: "ujfkbxvtfomthllu"
      }
    });
    return await transporter.sendMail(mailOptions);
  }
}
