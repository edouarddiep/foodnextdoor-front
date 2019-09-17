import { Vendor } from './Vendor.model';
import { Customer } from './Customer.model';
import { Content } from './Content.model';
import { DatePipe } from '@angular/common';
import { Dish } from './Dish.model';

export class DetailedOrder {
    id: number;
    date: Date;
    isPayed: boolean;
    customer: Customer;
    state: number;
    vendor: Vendor;
    orderItems: Array<Dish>;

    static createDetailedOrder(id: number, date: Date, isPayed: boolean, customer: Customer, state: number, vendor: Vendor,
        orderItems: Array<Dish>): DetailedOrder {
        const detailedOrder = new DetailedOrder();
        detailedOrder.id = id;
        detailedOrder.date = date;
        detailedOrder.isPayed = isPayed;
        detailedOrder.customer = customer;
        detailedOrder.state = state;
        detailedOrder.vendor = vendor;
        detailedOrder.orderItems = orderItems;
        return detailedOrder;
    }
}
