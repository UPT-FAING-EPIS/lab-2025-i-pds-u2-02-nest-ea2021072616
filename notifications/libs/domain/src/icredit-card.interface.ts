/**
 * Interfaz que define el contrato para el envío de mensajes.
 * Implementa el patrón Strategy para permitir diferentes mecanismos de envío (correo, SMS, etc).
 */
export interface IMessageSender {
  /**
   * Envía un mensaje utilizando el canal implementado.
   * @param Message Contenido del mensaje a enviar.
   * @returns {string} Confirmación o resultado del envío del mensaje.
   */
  SendMessage(Message: string): string
}