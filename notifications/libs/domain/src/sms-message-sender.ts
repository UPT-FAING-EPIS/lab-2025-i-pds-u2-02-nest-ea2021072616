import { IMessageSender } from "./imessage-sender.interface";

/**
 * Implementación de IMessageSender para el envío de mensajes por SMS.
 * Esta clase simula el envío de un mensaje utilizando el canal de SMS.
 */
export class SmsMessageSender implements IMessageSender {
    /**
     * Envía un mensaje utilizando el canal de SMS.
     * 
     * @param Message Contenido del mensaje a enviar.
     * @returns {string} Confirmación del envío del mensaje por SMS.
     */
    SendMessage(Message: string): string {
        return "'" + Message + "' : This Message has been sent using SMS";
    }
}