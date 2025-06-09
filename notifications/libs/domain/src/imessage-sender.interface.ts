/**
 * Interfaz que define el contrato para el envío de mensajes.
 * Permite implementar diferentes mecanismos de envío (correo electrónico, SMS, etc.) usando el patrón Strategy.
 */
export interface IMessageSender {
  /**
   * Envía un mensaje utilizando el canal implementado.
   * @param Message Contenido del mensaje a enviar.
   * @returns {string} Confirmación o resultado del envío del mensaje.
   */
  SendMessage(Message: string): string
}