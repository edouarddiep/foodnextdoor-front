import { Dish } from './Dish.model';
import { Order } from './Order.model';

export class Content {
    quantity: number;
    price: number;
    discount: number;
    order: Order;
    dish: Dish;

    static createContent(quantity: number, price: number, discount: number, order: Order, dish: Dish): Content {
        const content = new Content();
        content.quantity = quantity;
        content.price = price;
        content.discount = discount;
        content.order = order;
        content.dish = dish;
        return content;
    }
}
