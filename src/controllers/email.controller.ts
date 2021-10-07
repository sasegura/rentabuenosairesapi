import {post, requestBody} from '@loopback/rest';
import {MailerService} from '../services/notification.services';

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
  pisoNombreI: string;
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

class Mail3 {
  correoCliente: string;
  correoAdmin: string;
  subject: string;
  mensajeText: string;
  mensajeHtml: string;
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
      subject: 'CONFIRMACION DE RESERVA-BOOKING CONFIRMATION', // Subject line
      text: '', // plain text body
      html:
        `<b>Hola ` +
        mail.clienteNombre +
        `,</b><p>Se ha confirmado la reserva del departamento ` +
        mail.pisoNombre +
        ` del destino ` +
        mail.destino +
        ` con ingreso el día ` +
        mail.fechaInicio +
        ` y salida el día ` +
        mail.fechaFin +
        `</p>
          <p>En caso de necesitar cancelar la reserva puedes ponerte en contacto con el administrador mediante el correo ` +
        mail.correoAdmin +
        `.</p+
          <p>¡Gracias!</p>` +
        `<br/><br/><br/><b>Hi ` +
        mail.clienteNombre +
        `,</b><p>The ` +
        mail.pisoNombreI +
        ` apartment reservation has been confirmed at ` +
        mail.destino +
        ` destination, with check-in ` +
        mail.fechaInicio +
        ` and check-out on  ` +
        mail.fechaFin +
        `.</p>
            <p>In case you need to cancel the reservation you can contact the administrator by email ` +
        mail.correoAdmin +
        `.</p>
            <p>Thanks!</p>`, // html body
    };

    /**Hola Jonathan Berman,
    Se ha confirmado la reserva del departamento AAA en destino Buenos Aires, con ingreso el día 08/12/2021 y salida el día 10/12/2021.
    En caso de necesitar cancelar la reserva puedes ponerte en contacto con el administrador mediante el correo administrador@e-homeselect.com.
    Gracias!
    */
    /**Hi Jonathan Berman,
    The AAA apartment reservation has been confirmed at Buenos Aires destination, with check-in 12/08/2021 and check-out on 12/10/2021.
    In case you need to cancel the reservation you can contact the administrator by email administrador@e-homeselect.com.
    Thanks!
    */

    let mail1 = await new MailerService().sendMail(parametros1);

    if (mail1) {
      return true;
    } else {
      return false;
    }
  }

  @post('/sendMailCitaCancelada', {
    responses: {
      '200': {
        description: 'enviar mail a cliente cancelando cita',
      },
    },
  })
  async SendMailCitaCancelada(@requestBody() mail: Mail): Promise<boolean> {
    let parametros1 = {
      from: '"E-Home Select" <no-reply@e-homeselect.com>', // sender address
      to: mail.correoCliente, // list of receivers
      subject: 'CANCELACION DE RESERVA-BOOKING CANCELLATION', // Subject line
      text: '', // plain text body
      html:
        `<b>Hola ` +
        mail.clienteNombre +
        `,</b><p>Se ha cancelado la reserva del departamento ` +
        mail.pisoNombre +
        ` en destino ` +
        mail.destino +
        `, con ingreso el día ` +
        mail.fechaInicio +
        ` y salida el día ` +
        mail.fechaFin +
        `.</p>
          <p>En caso de necesitarlo, puedes ponerte en contacto con el administrador mediante el correo ` +
        mail.correoAdmin +
        `.</p>
          <p>¡Gracias!</p>` +
        `<br/><br/><br/><b>Hi ` +
        mail.clienteNombre +
        `,</b><p>The reservation of the ` +
        mail.pisoNombreI +
        ` apartment in ` +
        mail.destino +
        `, destination has been canceled, with check-in on ` +
        mail.fechaInicio +
        ` and check-out ` +
        mail.fechaFin +
        `.</p>
          <p>In case you need it, you can contact the administrator by email ` +
        mail.correoAdmin +
        `.</p>
          <p>Thanks!</p>`, // html body
    };
    /** Se ha cancelado la reserva del departamento AAA en destino Buenos Aires, con ingreso el día 08/12/2021 y salida el día 10/12/2021.
    En caso de necesitarlo, puedes ponerte en contacto con el administrador mediante el correo administrador@e-homeselect.com.
    Gracias!
    */
    /**The reservation of the AAA apartment in Buenos Aires destination has been canceled, with check-in on 12/08/2021 and check-out 12/10/2021.
    In case you need it, you can contact the administrator by email administrator@e-homeselect.com.
    Thanks!
    */
    let mail1 = await new MailerService().sendMail(parametros1);

    if (mail1) {
      return true;
    } else {
      return false;
    }
  }

  @post('/sendMail', {
    responses: {
      '200': {
        description: 'enviar mail a cliente confirmando cita',
      },
    },
  })
  async SendMail(@requestBody() mail: Mail3): Promise<boolean> {
    let parametros1 = {
      from: '"E-Home Select" <no-reply@e-homeselect.com>', // sender address
      to: mail.correoCliente, // list of receivers
      subject: mail.subject, // Subject line
      text: mail.mensajeText, // plain text body
      html: mail.mensajeHtml, // html body
    };

    let mail1 = await new MailerService().sendMail(parametros1);

    if (mail1) {
      return true;
    } else {
      return false;
    }
  }
}
