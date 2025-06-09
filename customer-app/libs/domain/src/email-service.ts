import { Customer } from "./customer";
//import { MailerService } from '@nestjs-modules/mailer';

/**
 * Servicio encargado de la gestión y envío de correos electrónicos a los clientes.
 * Puede integrarse con servicios de correo externos para notificaciones automáticas.
 */
export class EmailService {
    //constructor(private readonly mailService: MailerService) {}

    /**
     * Envía un correo de confirmación de registro al cliente.
     * 
     * @param customer Objeto Customer que contiene la información del destinatario.
     * @returns {boolean} Retorna true si el correo fue enviado exitosamente.
     */
    public SendRegistrationEmail(customer: Customer): boolean
    {
        // this.mailService.sendMail({
        //     from: 'Kingsley Okure <kingsleyokgeorge@gmail.com>',
        //     to: customer.Email,
        //     subject: "Test mail",
        //     text: "<h1>Hello</h1>",
        //   });        
        return true;
    }         
}