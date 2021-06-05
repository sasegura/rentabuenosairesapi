// Uncomment these imports to begin using these cool features!

import {post, requestBody} from '@loopback/rest';
//import {UsuariosRepository} from '../repositories';
//import {SmsNotification} from '../models';
//import {EmailNotification} from '../models/email-notification.model';
//import {StudentRepository, UserRepository} from '../repositories';
//import {AuthService} from '../sevices/auth.service';
//import {EncryptDecrypt} from '../sevices/encrypt-decrypt.service';
import {MailerService} from '../services/notification.services';

/*class Credentials {
  username: string;
  password: string;
}

class PasswordResetData {
  username: string;
}

class Token {
  token: string;
}

class IncripcionData {
  nombre: string;
  apellidos: string;
  correo: string;
  password: string;
  link: string;
}*/

class Mail {
  correoCliente: string;
  correoAdmin: string;
  fechaInicio: string;
  fechaFin: string;
  cantidadPersonas: number;
  precio: number;
  telefono: number;
  clienteNombre: string;
  pisoNombre: string;
  destino: string;
  texto: string;
}

class Mail2 {
  correoCliente: string;
  correoAdmin: string;
  fechaInicio: string;
  clienteNombre: string;
  telefono: string;
  mensaje: string;
}

export class emailController {
  @post('/sendMailPreReserva', {
    responses: {
      '200': {
        description: 'enviar mail a administrador',
      },
    },
  })
  async SendMailCitaContratada(@requestBody() mail: Mail): Promise<boolean> {
    let parametros1 = {
      from: '"E-Home Select" <no-reply@e-homeselect.com>', // sender address
      to: mail.correoAdmin, // list of receivers
      subject: 'Nueva preReserva', // Subject line
      text: '', // plain text body
      html:
        `<b>Hola administrador,</b><p>` +
        mail.clienteNombre +
        ` ha pre-reservado el piso ` +
        mail.pisoNombre +
        ` del destino ` +
        mail.destino +
        ` desde el día ` +
        mail.fechaInicio +
        ` hasta el día ` +
        mail.fechaFin +
        ` para ` +
        mail.cantidadPersonas +
        ` personas.</p>
          <p>Para confirmar la pre-reserva acceda al sitio https://e-homeselect.com </p>
          <p>Para ponerse en contacto con su cliente por el correo: ` +
        mail.correoCliente +
        ` o por el teléfono` +
        mail.telefono +
        ` .</p>
          <p>Comentarios del cliente:</p>
          <p>` +
        mail.texto +
        `</p>
          <p>Un saludo</p>`, // html body
    };

    let mail1 = await new MailerService().sendMail(parametros1);

    if (mail1) {
      return true;
    } else {
      return false;
    }
  }

  @post('/sendMailMensaje', {
    responses: {
      '200': {
        description: 'enviar mensaje al administrador',
      },
    },
  })
  async SendMailMensaje(@requestBody() mail2: Mail2): Promise<boolean> {
    let parametros1 = {
      from: '"E-Home Select" <no-reply@e-homeselect.com>', // sender address
      to: mail2.correoAdmin, // list of receivers
      subject: 'Nuevo mensaje', // Subject line
      text: '', // plain text body
      html:
        `<b>Hola administrador,</b>
          <p> <b>Cliente:</b> ` +
        mail2.clienteNombre +
        ` ha enviado un mensaje el día ` +
        mail2.fechaInicio +
        `</p>
          <p>Puede ponerse en contacto con su cliente por el correo: ` +
        mail2.correoCliente +
        ` ó teléfono: ` +
        mail2.telefono +
        `.</p>
          <p> <b> Mensaje: </b><p>` +
        mail2.mensaje +
        `</p>
          <p>Un saludo: 'Equipo de informática'</p>`, // html body
    };

    let mail1 = await new MailerService().sendMail(parametros1);

    if (mail1) {
      console.log(parametros1);
      return true;
    } else {
      return false;
    }
  }

  @post('/sendMailCitaConfirmada', {
    responses: {
      '200': {
        description: 'enviar mail a cliente confirmando cita',
      },
    },
  })
  async SendMailCitaConfirmada(@requestBody() mail: Mail): Promise<boolean> {
    let parametros1 = {
      from: '"E-Home Select" <no-reply@e-homeselect.com>', // sender address
      to: mail.correoCliente, // list of receivers
      subject: 'Nueva cita', // Subject line
      text: '', // plain text body
      html:
        `<b>Hola ` +
        mail.clienteNombre +
        `,</b><p>Se ha confirmado tu reservación en el piso ` +
        mail.pisoNombre +
        ` del destino ` +
        mail.destino +
        ` comenzando el día ` +
        mail.fechaInicio +
        ` hasta el día ` +
        mail.fechaFin +
        `</p>
          <p>En caso que necesite cancelar su reservación puede ponerse en contacto con el administrador mediante el correo ` +
        mail.correoAdmin +
        `.</p>
          <p>El sistema de pago se realizará directamente en el establecimiento el día que comience su reservación.</p>
          <p>Si tienes cualquier problema para confirmar no dudes en contactarnos.</p>
          <p>Un saludo</p>`, // html body
    };

    let mail1 = await new MailerService().sendMail(parametros1);

    if (mail1) {
      return true;
    } else {
      return false;
    }
  }
}
