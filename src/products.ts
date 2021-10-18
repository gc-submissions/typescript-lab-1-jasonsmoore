export interface Product {
    name: string;
    price: number;
};
const products : Product[] = [
    {
        name: "Soda",
        price: 2.75,
    },
    {
        name: "Candy",
        price: 1.25,
    },
    {
        name: "Chips",
        price: 3.25,
    },
];
export function calcAverageProductPrice(products : Product[]) {
    // for(let n = 0; n <= products.length; n++) { // from 0; to end of array; each time increasing by 1
    //     total += grades[n]; // each item at index and adding to total in order to get sum
    // }
    // for (let product of products) { // loop through each item of array one at a time
    //     total += product.price;
    // }
    // let avg = total / products.length; 
    // return avg;
    let total = 0;
    products.forEach(e => {
        total += e.price;
    });
    let avg = total / products.length;
    if(products.length === 0) {
        return 0;
    } else {
        return avg;
    };
};