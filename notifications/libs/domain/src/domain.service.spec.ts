import { LongMessage } from './long-message';
import { EmailMessageSender } from './email-message-sender';
import { AbstractMessage } from './abstract-message';
import { ShortMessage } from './short-message';
import { SmsMessageSender } from './sms-message-sender';

/**
 * Pruebas unitarias para el sistema de notificaciones.
 * Se valida el envío de mensajes largos por correo electrónico y mensajes cortos por SMS,
 * así como el manejo de errores al intentar enviar mensajes largos por SMS.
 */

describe('GivenLongMessage_WhenSend_ThenEmailIsTriggered', () => {
  let longMessage: AbstractMessage;
  let confirm: string;

  /**
   * Configura el entorno de pruebas para mensajes largos enviados por correo electrónico.
   */
  beforeEach(async () => {
    const Message = "Este es un mensaje bien pero bien largoooooooooooooooooooooooo.";
    longMessage = new LongMessage(new EmailMessageSender());
    confirm = longMessage.SendMessage(Message);
  });

  /** Verifica que la respuesta del envío no sea nula */
  it('Long Messsage should be not null', () => {
    expect(confirm).not.toBeNull();
  });

  /** Verifica que la respuesta contenga caracteres */
  it('Long Messsage should contains characters more than 0', () => {
    expect(confirm.length > 0).toBeTruthy();
  });
});

describe('GivenShortMessage_WhenSend_ThenSMSIsTriggered', () => {
  let shortMessage: AbstractMessage;
  let confirm: string;

  /**
   * Configura el entorno de pruebas para mensajes cortos enviados por SMS.
   */
  beforeEach(async () => {
    const Message = "Este es un mensaje corto.";
    shortMessage  = new ShortMessage(new SmsMessageSender());
    confirm = shortMessage .SendMessage(Message);
  });

  /** Verifica que la respuesta del envío no sea nula */
  it('Short Messsage should be not null', () => {
    expect(confirm).not.toBeNull();
  });

  /** Verifica que la respuesta contenga caracteres */
  it('Short Messsage should contains characters more than 0', () => {
    expect(confirm.length > 0).toBeTruthy();
  });
});

describe('GivenLargeMessage_WhenSendinSMS_ThenOccursException', () => {
  let shortMessage: AbstractMessage;
  const Message = "Este es un mensaje largooooooooooooooooo.";

  /**
   * Configura el entorno de pruebas para intentar enviar un mensaje largo por SMS.
   */
  beforeEach(async () => {
    shortMessage  = new ShortMessage(new SmsMessageSender());
  });

  /** Verifica que se lance una excepción al enviar un mensaje largo por SMS */
  it('Large Messsage in SMS should be an error', () => {
    expect(() => {shortMessage.SendMessage(Message)}).toThrow(new ShortMessage(new SmsMessageSender()).LARGE_ERROR_MESSAGE);
  });
});