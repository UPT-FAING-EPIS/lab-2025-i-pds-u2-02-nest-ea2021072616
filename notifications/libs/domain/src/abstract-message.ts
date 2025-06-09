import { IMessageSender } from "./imessage-sender.interface";

/**
 * Clase abstracta que define la estructura básica para el envío de mensajes.
 * Utiliza el patrón Strategy mediante la interfaz IMessageSender para permitir diferentes mecanismos de envío.
 */
export abstract class AbstractMessage {
    /** Instancia del objeto responsable de enviar el mensaje */
    protected _messageSender: IMessageSender;

    /**
     * Envía un mensaje utilizando el mecanismo definido por la implementación concreta.
     * 
     * @param Message Contenido del mensaje a enviar.
     * @returns {string} Resultado del envío del mensaje.
     */
    public abstract SendMessage(Message: string): string;
}