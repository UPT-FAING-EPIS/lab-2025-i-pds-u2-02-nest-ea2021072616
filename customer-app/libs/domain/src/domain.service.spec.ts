import { Customer } from './customer';
import { CustomerRegistration } from './customer-registration';
import { DataAccessLayer } from './data-access-layer';
import { EmailService } from './email-service';
import { Validator } from './validator';

/**
 * Pruebas unitarias para el proceso de registro de clientes.
 * Se valida la creación, validación, almacenamiento y notificación por correo electrónico de un cliente.
 */

describe('GivenANewCustomer_WhenRegister_ThenIsValidatedSavedEmailedSuccessfully', () => {
  let customer: Customer;
  let validator: Validator;
  let dataAccessLayer: DataAccessLayer;
  let saved: boolean;
  let email: EmailService;

  /**
   * Configura el entorno de pruebas antes de cada caso.
   * Crea un nuevo cliente, inicializa las dependencias y guarda el cliente.
   */
  beforeEach(async () => {
    validator = new Validator();
    dataAccessLayer = new DataAccessLayer();
    email = new EmailService();
    customer = Customer.Create(
      "Jose Cuadros","p.cuadros@gmail.com","1234567890","Tacnamandapio","str0ng.pa55");
    saved =  dataAccessLayer.SaveCustomer(customer);
  });

  /** Verifica que el cliente haya sido creado correctamente */
  it('Customer should be defined', () => {
    expect(customer).toBeDefined();
  });

  /** Verifica que el cliente sea válido */
  it('Customer should be valid', () => {
    expect(validator.ValidateCustomer(customer)).toBeTruthy();
  });

  /** Verifica que el cliente haya sido guardado */
  it('Customer should be saved', () => {
    expect(saved).toBeTruthy();
  });

  /** Verifica que el cliente haya sido agregado a la lista */
  it('Customer should be add', () => {
    expect(dataAccessLayer.Customers.length > 0).toBeTruthy();
  });

  /** Verifica que se haya enviado el correo de registro */
  it('Customer should be notified', () => {
    expect(email.SendRegistrationEmail(customer)).toBeTruthy();
  });
});

/**
 * Pruebas unitarias para el registro completo de un cliente usando CustomerRegistration.
 */
describe('GivenANewCustomer_WhenRegister_ThenIsRegisteredSuccessfully', () => {
  let customer: Customer;
  let registration: CustomerRegistration;

  /**
   * Configura el entorno de pruebas antes de cada caso.
   * Inicializa el registro y crea un nuevo cliente.
   */
  beforeEach(async () => {
    registration = new CustomerRegistration();
    customer = Customer.Create(
      "Jose Cuadros","p.cuadros@gmail.com","1234567890","Tacnamandapio","str0ng.pa55");
  });

  /** Verifica que el cliente haya sido creado correctamente */
  it('Customer should be defined', () => {
    expect(customer).toBeDefined();
  });

  /** Verifica que el cliente haya sido registrado correctamente */
  it('Customer should be registered', () => {
    expect(registration.RegisterCustomer(customer)).toBeTruthy();
  });
});
