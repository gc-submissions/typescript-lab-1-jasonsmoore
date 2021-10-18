import { Product } from "./products";
export interface InventoryItem {
    product: Product,
    quantity: number,
};
const inventory : InventoryItem[] = [
    {
        product: 
        {
            name: "motor",
            price: 10.00,
        },
        quantity: 10,
    },
    {
        product: 
        {
            name: "sensor",
            price: 12.50,
        },
        quantity: 4,
    },
    {
        product: 
        {
            name: "LED",
            price: 1.00,
        },
        quantity: 20,
    }
];
export function calcInventoryValue(inventory: InventoryItem[]) {
    let total = 0;
    inventory.forEach(e => {
        total += e.product.price * e.quantity; // total = price * quantity + total
    });
    return total;
};
calcInventoryValue(inventory);