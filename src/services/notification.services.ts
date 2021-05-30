
import {SentMessageInfo} from 'nodemailer';
import Mail = require('nodemailer/lib/mailer');

const nodemailer = require("nodemailer");

export class MailerService {

  async sendMail(mailOptions: Mail.Options): Promise<SentMessageInfo> {
    const transporter = nodemailer.createTransport({
      host: "smtp.servidor-correo.com",
      port: 587,
      secure: true, // use TLS
      auth: {
        user: "administrador@e-homeselect.com",
        pass: "Jonaberm1983"
      }
    });
    return await transporter.sendMail(mailOptions);
  }
}
