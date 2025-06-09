import { Customer } from "./customer";

/**
 * Clase encargada de validar la información de los clientes.
 * Permite asegurar que los datos requeridos estén completos y sean válidos antes de su procesamiento.
 */
export class Validator {
    /**
     * Valida que los campos obligatorios del cliente no estén vacíos o nulos.
     * 
     * @param customer Objeto Customer a validar.
     * @returns {boolean} Retorna true si la validación es exitosa, lanza una excepción si algún campo es inválido.
     * @throws {Error} Si algún campo obligatorio está vacío o nulo.
     */
    public ValidateCustomer(customer: Customer): boolean
    {
        //Need to Validate the Customer Object
        if (typeof customer.Name === 'string' && customer.Name.trim().length === 0) throw new Error("Name can't be null or empty");
        if (typeof customer.Email === 'string' && customer.Email.trim().length === 0) throw new Error("Email can't be null or empty");
        if (typeof customer.MobileNumber === 'string' && customer.MobileNumber.trim().length === 0) throw new Error("MobileNumber can't be null or empty");
        if (typeof customer.Address === 'string' && customer.Address.trim().length === 0) throw new Error("Address can't be null or empty");
        return true;
    }    
}