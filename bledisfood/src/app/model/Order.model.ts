export class Order {
    id: number;
    date: Date;
    isPayed: boolean;
    customer: number;
    vendor: number;
    state: number;
    contents: Array<number>;

    static createOrder(date: Date, isPayed: boolean, customer: number, vendor: number, state: number, contents: Array<number>): Order {
        const order = new Order();
        order.date = date;
        order.isPayed = isPayed;
        order.customer = customer;
        order.state = state;
        order.vendor = vendor;
        order.contents = contents;
        return order;
    }
}
