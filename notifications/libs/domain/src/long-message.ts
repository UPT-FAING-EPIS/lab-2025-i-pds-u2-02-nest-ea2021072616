import { AbstractMessage } from "./abstract-message";
import { IMessageSender } from "./imessage-sender.interface";

/**
 * Implementación concreta de AbstractMessage para el envío de mensajes largos.
 * Utiliza un IMessageSender para definir el canal de envío (por ejemplo, correo electrónico).
 */
export class LongMessage extends AbstractMessage {
    /**
     * Inicializa una nueva instancia de LongMessage con el mecanismo de envío especificado.
     * @param messageSender Implementación de IMessageSender que define el canal de envío.
     */
    constructor(messageSender: IMessageSender) {
        super();
        this._messageSender = messageSender;
    }

    /**
     * Envía un mensaje largo utilizando el canal definido por messageSender.
     * @param Message Contenido del mensaje a enviar.
     * @returns {string} Resultado del envío del mensaje.
     */
    public SendMessage(Message: string): string {
        return this._messageSender.SendMessage(Message);
    }
}