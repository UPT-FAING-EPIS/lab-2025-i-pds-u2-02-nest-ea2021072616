import { IMessageSender } from "./imessage-sender.interface";

/**
 * Implementación de IMessageSender para el envío de mensajes por correo electrónico.
 * Esta clase simula el envío de un mensaje utilizando el canal de email.
 */
export class EmailMessageSender implements IMessageSender {
    /**
     * Envía un mensaje utilizando el canal de correo electrónico.
     * 
     * @param Message Contenido del mensaje a enviar.
     * @returns {string} Confirmación del envío del mensaje por email.
     */
    SendMessage(Message: string): string {
        return "'" + Message + "'   : This Message has been sent using Email";
    }
}