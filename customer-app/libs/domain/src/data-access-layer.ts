import { Customer } from "./customer";

/**
 * Capa de acceso a datos para la gestión de clientes.
 * Permite almacenar y recuperar información de clientes.
 */
export class DataAccessLayer {
    /** Lista de clientes almacenados en memoria */
    public Customers: Array<Customer>;

    /**
     * Inicializa una nueva instancia de DataAccessLayer.
     */
    constructor() {
        this.Customers = [];
    }

    /**
     * Guarda un cliente en la lista de clientes.
     * 
     * @param customer Objeto Customer a guardar.
     * @returns {boolean} Retorna true si el cliente fue guardado exitosamente.
     */
    public SaveCustomer(customer: Customer): boolean
    {
        this.Customers.push(customer);
        return true;
    }           
}