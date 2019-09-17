import { User } from './User.model';

export class Customer {
    id: number;
    hasPaypal: boolean;
    hasAllergies: boolean;
    isVegan: boolean;
    user: User;

    static createCustomer(user : any) : Customer{
        const customer = new Customer();
        customer.hasAllergies = false;
        customer.hasPaypal = true;
        customer.isVegan = false;
        customer.user = user;
        return customer;
    }
}
