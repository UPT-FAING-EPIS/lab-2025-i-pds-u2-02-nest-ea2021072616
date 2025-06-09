/**
 * Representa a un cliente del sistema.
 * Contiene la información básica necesaria para el registro y gestión de clientes.
 */
export class Customer {
    /** Nombre completo del cliente */
    public Name: string;
    /** Correo electrónico del cliente */
    public Email: string;
    /** Número de teléfono móvil del cliente */
    public MobileNumber: string;
    /** Dirección física del cliente */
    public Address: string;
    /** Contraseña del cliente */
    public Password: string;

    /**
     * Crea una nueva instancia de Customer.
     * 
     * @param name Nombre completo del cliente.
     * @param email Correo electrónico del cliente.
     * @param mobileNumber Número de teléfono móvil del cliente.
     * @param address Dirección física del cliente.
     * @param password Contraseña del cliente.
     * @returns {Customer} Nueva instancia de Customer con los datos proporcionados.
     */
    public static Create(name: string, email: string, mobileNumber: string, address: string, password: string): Customer
    {
        const c = new Customer();
        c.Name = name;
        c.Email = email; 
        c.MobileNumber = mobileNumber; 
        c.Address = address; 
        c.Password = password;
        return c;
    }
}