import { Customer } from "./customer";
import { DataAccessLayer } from "./data-access-layer";
import { EmailService } from "./email-service";
import { Validator } from "./validator";

/**
 * Clase responsable del proceso de registro de clientes.
 * Realiza la validación, almacenamiento y notificación por correo electrónico.
 */
export class CustomerRegistration {
    /**
     * Registra un nuevo cliente en el sistema.
     * 
     * Pasos:
     * 1. Valida la información del cliente.
     * 2. Guarda el cliente en la base de datos.
     * 3. Envía un correo de confirmación de registro.
     * 
     * @param customer Objeto de tipo Customer que contiene la información del cliente a registrar.
     * @returns {boolean} Retorna true si el registro fue exitoso.
     */
    public RegisterCustomer(customer: Customer): boolean
    {
        //Step1: Validate the Customer
        const validator = new Validator();
        validator.ValidateCustomer(customer);
        //Step2: Save the Customer Object into the database
        const customerDataAccessLayer = new DataAccessLayer();
        customerDataAccessLayer.SaveCustomer(customer);
        //Step3: Send the Registration Email to the Customer
        const email = new EmailService();
        email.SendRegistrationEmail(customer);
        return true;
    }    
}
