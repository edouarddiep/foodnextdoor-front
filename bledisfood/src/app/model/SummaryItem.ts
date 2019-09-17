export class SummaryItem {

    id: number;
    name: string;
    price: number;
    quantity: number;

    static createSummaryItem(id: number, name: string, price: number, quantity: number): SummaryItem {
        const summaryItem = new SummaryItem();
        summaryItem.id = id;
        summaryItem.name = name;
        summaryItem.price = price;
        summaryItem.quantity = quantity;
        return summaryItem;
    }
}