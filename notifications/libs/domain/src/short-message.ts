import { AbstractMessage } from "./abstract-message";
import { IMessageSender } from "./imessage-sender.interface";

/**
 * Implementación concreta de AbstractMessage para el envío de mensajes cortos.
 * Utiliza un IMessageSender para definir el canal de envío (por ejemplo, SMS).
 * Restringe el envío a mensajes de hasta 25 caracteres.
 */
export class ShortMessage extends AbstractMessage {
    /** Mensaje de error mostrado cuando el mensaje excede los 25 caracteres */
    public LARGE_ERROR_MESSAGE: string = "Unable to send the message as length > 25 characters";

    /**
     * Inicializa una nueva instancia de ShortMessage con el mecanismo de envío especificado.
     * @param messageSender Implementación de IMessageSender que define el canal de envío.
     */
    constructor(messageSender: IMessageSender) {
        super();
        this._messageSender = messageSender;
    }

    /**
     * Envía un mensaje corto utilizando el canal definido por messageSender.
     * Lanza una excepción si el mensaje excede los 25 caracteres.
     * @param Message Contenido del mensaje a enviar.
     * @returns {string} Resultado del envío del mensaje.
     * @throws {Error} Si el mensaje excede los 25 caracteres.
     */
    public SendMessage(Message: string): string {
        if (Message.length <= 25)
            return this._messageSender.SendMessage(Message);
        else
            throw new Error(this.LARGE_ERROR_MESSAGE);
    }
}